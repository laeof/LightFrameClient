import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { INews } from 'src/app/dtos/INews';

@Component({
    selector: 'app-news',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './news.component.html',
    styleUrl: './news.component.scss'
})
export class NewsComponent implements OnInit{
    news: INews[] | undefined = []
    @Input() limiter!: number;

    constructor() {
        this.news?.push({
            photoUrl: 'https://artmix.kh.ua/wp-content/uploads/2023/11/stile-czyklorama-sajt-400x250.jpg',
            title: '#fashionphotography in our rooms',
            newsType: 'Новини фотостудiї',
            text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
        }, {
            photoUrl: 'https://artmix.kh.ua/wp-content/uploads/2023/11/price-obladnannya-sajt-400x250.jpg',
            title: 'Цiна та умови бронювання студiї',
            newsType: 'Новини фотостудiї',
            text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
        }, {
            photoUrl: 'https://artmix.kh.ua/wp-content/uploads/2023/11/asya-kulyk-czykorama-sajt--400x250.jpg',
            title: 'Cyclorama - iдеальна локацiя для зйомок',
            newsType: 'Новини фотостудiї',
            text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
        },)
        this.news?.push(...this.news);
        this.news?.push(...this.news);

    }
    ngOnInit(): void {
        console.log(this.limiter)
        if (this.limiter !== undefined)
            this.news = this.news?.slice(0, this.limiter);
    }
}
