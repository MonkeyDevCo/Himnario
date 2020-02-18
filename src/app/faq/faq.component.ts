import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  lang: string ;
   
  constructor() { }

  ngOnInit(): void {
    this.lang = this.getCurrentLang();
  }

  getCurrentLang():string{
    return localStorage.getItem('language') || 'en';
  }

}
