import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {
  tabs = {
    alerts: 'alerts',
    events: 'events',
    logs: 'logs'
  };
  currentTab = 'alerts';
  data;
  showNotification;
  constructor() { }

  ngOnInit() {
    this.data = [
      {
        data: 'Value',
        value: 'Customber added',
        time: '2hrs ago'
      },
      {
        data: 'Value',
        value: 'Customber added',
        time: '2hrs ago'
      },
      {
        data: 'Value',
        value: 'Customber added',
        time: '2hrs ago'
      },
      {
        data: 'Value',
        value: 'Customber added',
        time: '2hrs ago'
      }
    ];
  }

}
