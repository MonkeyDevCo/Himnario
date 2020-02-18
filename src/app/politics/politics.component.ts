import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-politics',
  templateUrl: './politics.component.html',
  styleUrls: ['./politics.component.css']
})
export class PoliticsComponent implements OnInit {
  lang: string ; 
  constructor() { }

  ngOnInit(): void {
    this.lang = this.getCurrentLang();
  }

  getCurrentLang():string{
    return localStorage.getItem('language') || 'en';
  }

}
