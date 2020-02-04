import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isExpand = false;
  constructor(private router: Router) { }
  options;
  initializeUser() {
    this.options = [{
      class: 'fa fa-dashboard',
      text: 'Dashboard'
    }, {
      class: 'fa fa-camer',
      text: 'Hire a photographer'
    }, {
      class: 'fa fa-subscribe',
      text: 'Subscribers'
    }];
  }
  initializeAdmin() {
    /*
    {
      class: 'fa fa-tachometer',
      text: 'Dashboard',
      path: '',
      submenu: [
        {
          class: 'fa fa-user',
          text: 'User',
          path: 'admin/subscriber'
        },
        {
          class: 'fa fa-camera',
          text: 'Photographer',
          path: 'admin/photographer'

        }
      ]
    }, 
    */
    this.options = [{
      class: 'fa fa-camera',
      text: 'Photographers',
      path: 'admin/photographer'
    }, {
      class: 'fa fa-address-book-o',
      text: 'Subscribers',
      path: 'admin/subscriber'
    },
    {
      class: 'fas fa-book',
      text: 'Bookings',
      path: 'admin/booking'
    }
    ];
  }
  ngOnInit() {

    this.initializeAdmin();

  }
  navigate(path, indexMalavan, allow) {
    if (path !== '') {
      this.router.navigateByUrl(path);
    }
    if (allow) {
      this.options[indexMalavan].show = !this.options[indexMalavan].show;
      this.isExpand = true;
    }
  }
}


