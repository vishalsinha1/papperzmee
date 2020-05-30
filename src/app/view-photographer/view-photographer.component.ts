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
  fullname;
  email;
  mobileNo;
  billingAddress;
  pwd;
  briefBio;
  age;
  firstName;
  lastName;
  taxInfo;
  agreement;
  typeOfPhotographer;
  expertise;
  equipmentLevel;
  lightingOption;
  greenScreens;
  postShoot_retouching_editing;
  virtualReality_shoot;
  droneAerial_shoot;
  animationCreation;
  music;
  voiceOver;
  soundEffect;
  specialEffects_filter;
  currentLatt;
  currentLang;
  fileToUpload: File = null;
  languagesSpoken;
  valuePerHour;

  tabs = {
    Profile: 'Profile',
    Account: 'Account',
    Payment: 'Payment',
    professional_details: 'professional_details',
    Info: 'Info',
    Portfolio: 'Portfolio'
  };
  bankMethod = [];


  constructor(private subscriber: DataServiceService, private router: Router, private photoService: PhotographerService) {
    this.bankMethod = [
      { label: 'Bank Transfer', value: 'bank' },
      { label: 'NEFT', value: 'NEFT' },
      { label: 'GooglePay', value: 'gpay' }
    ]
  }
  message;
  // email = '';
  imageURL = 'https://i.pinimg.com/474x/73/90/d4/7390d4f07ea6ad287185df4ea789621f.jpg';
  ngOnInit() {
    this.currentTab = this.tabs.Profile;
    this.subscriber.currentMessage.subscribe((message: any) => {
      this.message = message;
      console.log('Message', message);
      if (message === 'empty') {
        this.router.navigate(['/admin/photographer']);
      } else if (message.allowCreate === true) {
        // this.message.billingAddress = {
        //   houseNo: '',
        //   street: '',
        //   city: '',
        //   postalCode: '',
        //   state: ''
        // };
        // this.message.rate = {
        //   value: '',
        //   per: '',
        //   valuePerHour: ''
        // }
      }
    });
  }
  back() {
    this.router.navigate(['/admin/photographer']);
  }
  save() {
    if (this.message.allowCreate) {
      this.addNew();
    } else {
      this.editphotoGrapher();
    }
  }
  addNew() {
    this.mapData();
    this.photoService.addPhotoGraphers(this.message).subscribe((res: any) => {
      console.log(res);
    }, (Error: any) => {
      console.log('Error', Error);
    });
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}

  mapData() {
    this.message.email = this.email;
    this.message.fullname = this.firstName + this.lastName;
    this.message.age = this.age;
    this.message.mobileNO = this.mobileNo;
    this.message.billingAddress = this.billingAddress;
    this.message.briefBio = this.briefBio;
    this.message.type = this.typeOfPhotographer;
    this.message.expertise = this.expertise;
    this.message.equipmentLevel = this.equipmentLevel;
    this.message.lightingOption = this.lightingOption;
    this.message.greenScreens = this.greenScreens;
    this.message.lightingOption = this.postShoot_retouching_editing;
    this.message.droneAerial_shoot = this.droneAerial_shoot;
    this.message.virtualReality_shoot = this.virtualReality_shoot;
    this.message.animationCreation = this.animationCreation;
    this.message.music = this.music;
    this.message.voiceOver = this.voiceOver;
    this.message.soundEffect = this.soundEffect;
    this.message.specialEffects_filter = this.specialEffects_filter;
    this.message.currentLang = this.currentLang;
    this.message.currentLatt = this.currentLatt;
    this.message.submitType = 'Form';
    this.message.photo = this.fileToUpload;
    this.message.languagesSpoken = this.languagesSpoken.split(',');
    this.message.valuePerHour = this.valuePerHour;
  }

  editphotoGrapher() {
    this.message;
    // this.photoService.editPhotographer(this.message)
  }

//   onlyOne(checkboxId,groupName) {
//     const checkboxes = document.getElementsByName(groupName)
//     checkboxes.forEach((item, index) => {
//         // if (item['value'] !== checkbox.value) {
//         //   item['checked'] = false;
//         // }
//         document.getElementById(groupName + (index + 1))['checked'] = false;
//     });
//     document.getElementById(checkboxId)['checked'] = true;
// }
}
