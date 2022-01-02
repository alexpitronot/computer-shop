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
}
}
