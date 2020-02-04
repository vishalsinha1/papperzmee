import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Router } from '@angular/router';
import { PhotographerService } from '../service/photographer.service';
@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css']
})
export class ViewBookingComponent implements OnInit {

  currentTab: string;
  tabs = {
    basic: 'basic',
    address: 'address',
    professional_details: 'professional',
    social_network: 'social'
  }
  constructor(private subscriber: DataServiceService, private router: Router,private photoService: PhotographerService) { }
  message;
  ngOnInit() {
    this.currentTab = this.tabs.basic;
    this.subscriber.currentMessage.subscribe((message: any) => {
      this.message = message;
      console.log("Message", message);
      if (message === 'empty') {
        this.router.navigate(['/admin/booking']);
      } else if (message.allowCreate === true) {
        this.message.billingAddress = {
          houseNo: '',
          street: '',
          city: '',
          postalCode: '',
          state: ''
        };
        this.message.rate = {
          value: '',
          per: '',
          valuePerHour: ''
        }
      }
    });
  }
  back() {
    this.router.navigate(['/admin/booking']);
  }
  save() {
    this.addNew();
  }
  addNew() {
    this.photoService.addPhotoGraphers(this.message).subscribe((res:any)=> {
      console.log(res);
    },(Error:any)=> {
      console.log("Error",Error);
    });
  }

}
