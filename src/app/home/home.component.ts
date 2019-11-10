import { Component, OnInit } from '@angular/core';
import {IntroComponent} from '../intro/intro.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  projects = [
    {id: 1, name: 'a', link: 'http://bit.ly/36gJiUh', image: 'assets/img/portfolio/1.jpg', brand: 'web' },
    {id: 2, name: 'b', link: 'abc', image: 'assets/img/portfolio/2.jpg', brand: 'digital' },
    {id: 3, name: 'c', link: 'abc', image: 'assets/img/portfolio/3.jpg', brand: 'web' },
    {id: 4, name: 'd', link: 'abc', image: 'assets/img/portfolio/4.jpg', brand: 'digital' },
    {id: 5, name: 'e', link: 'abc', image: 'assets/img/portfolio/5.jpg', brand: 'rened' },
    {id: 6, name: 'f', link: 'abc', image: 'assets/img/portfolio/6.jpg', brand: 'brand' },
    {id: 7, name: 'g', link: 'abc', image: 'assets/img/portfolio/7.jpg', brand: 'rened' },
    {id: 8, name: 'h', link: 'abc', image: 'assets/img/portfolio/8.jpg', brand: 'brand' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
