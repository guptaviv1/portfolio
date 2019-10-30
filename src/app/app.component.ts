import { Component, Renderer2, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  constructor(
    private renderer2: Renderer2,
    @Inject( DOCUMENT ) private document
  ) {
  }
  ngOnInit() {
    const s = this.renderer2.createElement('script');
    s.type = 'text/javascript';
    s.src = './assets/js/main.js';
    s.text = ``;
    this.renderer2.appendChild(this.document.body, s);
  }

}
