import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  event = {name: 'New Asus presentation', date: '3/2/2022', time: '10:00', location: {street: '23 Burla St', city: 'Haifa', country: 'Israel'}}
  
  events = [
    {name: 'New Asus presentation', date: '3/1/2022', time: '10:00', location: {street: '23 Burla St', city: 'Haifa', country: 'Israel'}, registration : true, label: 'new'},
    {name: 'New Gigabyte motherboard', date: '4/1/2022', time: '11:00', location: {street: '23 Burla St', city: 'Haifa', country: 'Israel'}, registration : false, label: 'private'},
    {name: 'AMD experience', date: '1/11/2022', time: '13:00', location: {street: '123 Lilach St', city: 'Tel-Aviv', country: 'Israel'}, registration : false, label: 'new'},
    {name: 'AMD experience', date: '1/11/2022', location: {street: '123 Lilach St', city: 'Tel-Aviv', country: 'Israel'}, registration : false},
    {name: 'G5 modeling', date: '6/5/2022', time: '9:00', location: {street: '1 Histadrut St', city: 'Ashdod', country: 'Israel'}, registration : true, label: 'public'}
  ]

  getTitleClass(eventFormat:any) {
    if (eventFormat === 'new') 
      return ['new']
    
    if (eventFormat === 'private')
      return ['private']
    
    if (eventFormat === 'public')
      return ['public']
    
    return ['inProgress']
  }
}