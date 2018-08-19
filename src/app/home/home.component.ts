import { Component, OnInit,ViewChild,ElementRef  } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
industriesArray = [
'Oil & Gas – Energy',
'Chemical Industry',
'Packaging industry',
'Mining Industry',
'Paper Industry',
'Construction',
'Utilities ',
'Agricultural & farm Industry',
'Industrial Machinery',
'Aerospace & Defense',
'Automobile components',
'Healthcare Equipment',
'Electrical components & Equipment',
'Heavy Industrial & Electrical Equipment',
'Household & Commercial Appliances',
'Telecommunication'];

industriesImageArray = ['gas_oil','checmical_industry','package','mining','paper','construction','tools','farming','machine','arospace_defence','automobile','medical','electrical_component','power','clean','telephone']

color = ['#f1c40f','#e67e22','#d35400','#f39c12','#1abc9c','#16a085','#2ecc71','#27ae60','#ecf0f1','#95a5a6','#7f8c8d','#bdc3c7'];

baseUrl = '/assets/images/';
	@ViewChild("industries") MyProp: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  scrollTo() {
		this.MyProp.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
	}

  getBackgoundColor(index) {
        return this.color[index%12];
  }

  getIndustryIcon(index){
    return this.baseUrl+""+this.industriesImageArray[index]+".svg"

  }

}
