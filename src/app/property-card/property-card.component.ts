import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent implements OnInit {
  propertyDetail = {
    price: '$726,500',
    agency: {
        brandingColors: {
            primary: '#ffe512'
        },
        logo: 'http://i1.au.reastatic.net/agencylogo/XRWXMT/12/20120927204448.gif'
    },
    id: '1',
    mainImage: 'http://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg'
  };
  constructor() { }

  ngOnInit() {
  }

}
