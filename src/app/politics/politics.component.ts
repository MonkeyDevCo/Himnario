import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-politics',
  templateUrl: './politics.component.html',
  styleUrls: ['./politics.component.css']
})
export class PoliticsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  changeLanguage(){
  	var x = document.getElementById("privacy_ES");
    var y = document.getElementById("privacy_EN");
    var z = document.getElementById("language");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
      z.innerHTML = "<i class=\"fa fa-globe fa-lg\"></i> English";
    } else {
      x.style.display = "none";
      y.style.display = "block";
      z.innerHTML = "<i class=\"fa fa-globe fa-lg\"></i> Español";
    }
  }

}
