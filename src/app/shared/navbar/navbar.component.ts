import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title: string = environment.titleApp; 
  politics: string;
  language: string;
  lang: string;

  constructor() {}

  ngOnInit(): void {
  	this.lang = this.getCurrentLang();

  	if(this.lang=='en'){
  		this.politics = 'Policy';
  		this.language = 'Language';
  	}else{
  		this.politics = 'Política';
  		this.language = 'Idioma';
  	}
  }

  getCurrentLang():string{
  	return localStorage.getItem('language') || 'en';
  }

  changeLang(){
  	this.lang = this.getCurrentLang();
  	if(this.lang=='en'){
  		localStorage.setItem('language', 'es');
  	}
  	else{
  		localStorage.setItem('language', 'en');
  	}
  	location.reload();
  }

}
