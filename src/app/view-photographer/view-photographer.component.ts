import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Router } from '@angular/router';
import { PhotographerService } from '../service/photographer.service';

@Component({
  selector: 'app-view-photographer',
  templateUrl: './view-photographer.component.html',
  styleUrls: ['./view-photographer.component.css']
})
export class ViewPhotographerComponent implements OnInit {

  currentTab: string;
  tabs = {
    Profile: 'Profile',
    Account: 'Account',
    Payment: 'Payment',
    professional_details: 'professional_details',
    Info : 'Info',
    Portfolio: 'Portfolio'
  }
  bankMethod = [];


  constructor(private subscriber: DataServiceService, private router: Router,private photoService:PhotographerService) { 
    this.bankMethod = [
      {label:'Bank Transfer', value: 'bank'},
      {label:'NEFT', value: 'NEFT'},
      {label:'GooglePay', value: 'gpay'}
    ]
  }
  message;
  email = 'Harry35@gmail.com'
  imageURL = 'https://i.pinimg.com/474x/73/90/d4/7390d4f07ea6ad287185df4ea789621f.jpg';
  ngOnInit() {
    this.currentTab = this.tabs.Profile;
    this.subscriber.currentMessage.subscribe((message: any) => {
      this.message = message;
      console.log("Message", message);
      if (message === 'empty') {
        this.router.navigate(['/admin/photographer']);
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
    this.router.navigate(['/admin/photographer']);
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
