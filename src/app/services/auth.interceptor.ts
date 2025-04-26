import { HttpErrorResponse, HttpInterceptorFn } from "@angular/common/http";
import { catchError, interval, switchMap, throwError } from "rxjs";
import { ITokens } from "../dtos/ITokens";
import { AuthService } from "./auth.service";
import { inject } from "@angular/core";
import { LFCookieService } from "./cookie.service";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const accountService = inject(AuthService)
    const cookieService = inject(LFCookieService)

    let tokens: ITokens = {
        accessToken: cookieService.accessToken.value,
        refreshToken: cookieService.refreshToken.value
    }

    const clonedRequest = req.clone({
        setHeaders: {
            Authorization: `Bearer ${tokens.accessToken}`,
        },
    });

    console.log(clonedRequest.headers)

    return next(clonedRequest).pipe(
        catchError((error: HttpErrorResponse) => {
            console.error('Error intercepted:', error);

            let intervalAuth = 2500;

            if (error.status === 401) {
                console.log(`error auth, retrying in ${intervalAuth / 1000} sec`);

                return interval(intervalAuth).pipe(
                    switchMap(() =>
                        accountService.RegenerateAccessToken(tokens).pipe(
                            switchMap((response: ITokens) => {
                                cookieService.setAccessToken(response.accessToken);
                                cookieService.setRefreshToken(response.refreshToken);

                                const retryRequest = req.clone({
                                    setHeaders: {
                                        Authorization: `Bearer ${response.accessToken}`,
                                    },
                                });

                                return next(retryRequest)
                            }),
                            catchError((regenerateError) => {
                                console.error('Error while regenerating token:', regenerateError);
                                return throwError(() => regenerateError);
                            })
                        )
                    ),
                    catchError((finalError) => {
                        console.error('Final error after retries');
                        return throwError(() => finalError || error);
                    })
                );
            }
            
            return throwError(() => error);
        })
    );
};