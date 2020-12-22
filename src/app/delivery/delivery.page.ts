import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.page.html',
  styleUrls: ['./delivery.page.scss'],
})
export class DeliveryPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

 payment() {
    this.route.navigate(['./payment']);
  }
 add_address() {
    this.route.navigate(['./add-address']);
  } 
}
