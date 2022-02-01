import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

source:string
  constructor() {
    this.source = '../../assets/Photos/lover.png';
   }
    
  

  ngOnInit(): void {
  }

}
