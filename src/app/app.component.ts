import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
  <h2>My favorite computer provider is: {{compProvider}}</h2>  
  `
})

export class AppComponent {
  title: string;
  compProvider: string;

  constructor() {
  this.title = `Computer Shop
                  Welcome`;
  this.compProvider = 'Asus'
  const events = [
    {name: 'New Asus presentation', date: '3/1/2022', time: '10:00', location: {address: '23 Burla St', city: 'Haifa', country: 'Israel'}},
    {name: 'New Gigabyte motherboard', date: '4/1/2022', time: '11:00', location: {address: '23 Burla St', city: 'Haifa', country: 'Israel'}},
    {name: 'AMD experience', date: '1/11/2022', time: '13:00', location: {address: '123 Lilach St', city: 'Tel-Aviv', country: 'Israel'}},
    {name: 'G5 modeling', date: '6/5/2022', time: '9:00', location: {address: '1 Histadrut St', city: 'Ashdod', country: 'Israel'}}
  ]
}
}
