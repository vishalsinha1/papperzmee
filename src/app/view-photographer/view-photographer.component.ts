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
  currentPgrapherId;

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
      !message.allowCreate  && message !== 'empty' ? this.mapPgrapherData() : '';
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
      alert('Photographer have Been Saved Successfully');
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
    this.message.postShoot_retouching_editing = this.postShoot_retouching_editing;
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
    this.message.languageSpoken = this.languagesSpoken ? this.languagesSpoken.split(',') : [];
    this.message.amountOfService = this.valuePerHour;
  }

  editphotoGrapher() {
    this.mapData();
    // this.message;
    this.photoService.editPhotoGraphers(this.message, this.currentPgrapherId)
    .subscribe((res) => {
      console.log(res);
      alert('Changes Have Been Saved Successfully');
    });
  }

  mapPgrapherData() {
    if (this.message.pinfo.length > 0) {
      this.typeOfPhotographer = this.message.pinfo[0].type || '';
      this.expertise = this.message.pinfo[0].expertise || '';
      this.equipmentLevel = this.message.pinfo[0].equipmentLevel || '';
      this.lightingOption = this.message.pinfo[0].lightingOption || '';
      this.greenScreens = this.message.pinfo[0].greenScreens || '';
      this.postShoot_retouching_editing = this.message.pinfo[0].postShoot_retouching_editing || '';
      this.droneAerial_shoot = this.message.pinfo[0].droneAerial_shoot || '';
      this.virtualReality_shoot = this.message.pinfo[0].virtualReality_shoot || '';
      this.animationCreation = this.message.pinfo[0].animationCreation || '';
      this.music = this.message.pinfo[0].music || '';
      this.voiceOver = this.message.pinfo[0].voiceOver || '';
      this.soundEffect = this.message.pinfo[0].soundEffect || '';
      this.specialEffects_filter = this.message.pinfo[0].specialEffects_filter || '';
      this.currentLang = this.message.pinfo[0].currentLang || '';
      this.currentLatt = this.message.pinfo[0].currentLatt || '';
    // this.message.submitType = 'Form';
      // this.imageURL = this.message.photo || this.imageURL;
      this.languagesSpoken = (this.message.pinfo[0].languageSpoken).toString() ;
      this.valuePerHour = this.message.pinfo[0].amountOfService || '';
      this.currentPgrapherId = this.message.pinfo[0].pgrapherid;
    }
  }

  thisFileUpload() {
    document.getElementById('file2').click();
}
}
