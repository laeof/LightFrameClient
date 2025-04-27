export interface INote {
    id: string,
    start: string,
    end: string,
    rent: boolean,
    roomId: string,
    day: string,
    paidState: boolean,
    isDisabled: boolean
}