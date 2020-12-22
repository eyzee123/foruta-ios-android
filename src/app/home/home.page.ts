import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

   constructor(private route: Router, public menuCtrl: MenuController) {
    this.menuCtrl.enable(true);
    }

  ngOnInit() {
  }
	
 refine() {
    this.route.navigate(['./refine']);
  }  
 cart() {
    this.route.navigate(['./cart']);
  }  
  search() {
    this.route.navigate(['./search']);
  } 
  restro_info() {
    this.route.navigate(['./restro-info']);
  } 
}
