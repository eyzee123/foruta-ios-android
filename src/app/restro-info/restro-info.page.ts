import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollDetail } from '@ionic/core';
@Component({
  selector: 'app-restro-info',
  templateUrl: './restro-info.page.html',
  styleUrls: ['./restro-info.page.scss'],
})
export class RestroInfoPage implements OnInit {
  favorite_icon = false;
  showToolbar = false; 	
  tab: string = "cuisine";
  faqExpand1: boolean;
  faqExpand2: boolean;
  faqExpand3: boolean;
  faqExpand4: boolean;
  faqExpand5: boolean;		
  constructor(private route: Router) { }

  ngOnInit() {
  }

  toggleSaveIcon1() {
    this.favorite_icon = !this.favorite_icon;
  }
	
   onScroll($event: CustomEvent<ScrollDetail>) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 150;
    }
	}
	
reset(){
  this.faqExpand1=false;
  this.faqExpand2=false;
  this.faqExpand3=false;
  this.faqExpand4=false;
  this.faqExpand5=false;
  }
	
	faqExpandToggle1() {
  this.reset();
    this.faqExpand1 = !this.faqExpand1;
  }

  faqExpandToggle2() {
  this.reset();
    this.faqExpand2 = !this.faqExpand2;
  }

  faqExpandToggle3() {
  this.reset();
    this.faqExpand3 = !this.faqExpand3;
  }
 
  faqExpandToggle4() {
  this.reset();
    this.faqExpand4 = !this.faqExpand4;
  }
  
  faqExpandToggle5() {
  this.reset();
    this.faqExpand5 = !this.faqExpand5;
  }

  itemsinfo() {
    this.route.navigate(['./itemsinfo']);
  }   
  cart() {
    this.route.navigate(['./cart']);
  }  
	
}
