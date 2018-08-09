import { Component, OnInit,ViewChild,ElementRef  } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	@ViewChild("industries") MyProp: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  scrollTo() {
		this.MyProp.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
	}

}
