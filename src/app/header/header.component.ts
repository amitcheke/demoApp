import { Component, OnInit, Input, HostListener } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { 
  	
  }

  ngOnInit() {
  }
  isCollapsed = true;

  @Input() home: HomeComponent;

  @HostListener('click')
  click() {
    this.home.scrollTo();
  }
}
