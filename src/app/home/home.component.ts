import { Component, OnInit,ViewChild,ElementRef  } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
industriesArray = ['Oil & Gas – Energy','Chemical Industry','Packaging industry','Mining Industry','Paper Industry','Construction','Utilities ','Agricultural & farm Industry','Industrial Machinery','Aerospace & Defense','Automobile components','Healthcare Equipment','Electrical components & Equipment',
'Heavy Industrial & Electrical Equipment','Household & Commercial Appliances','Telecommunication'];

serviceArray = ["DESIGNING", "SUPPLIER ASSESSMENTS", "3D SCANNING & 3D PRINTING", "SOURCING & MANUFACTURING", "TOOLING & PROTOTYPING", "MOLDFLOW SIMULATION", "SUPPLY CHAIN MANAGEMENT", "REVERSE ENGINEERING",
"AUTOMATION"];

industriesImageArray = ['gas_oil','checmical_industry','package','mining','paper','construction','tools','farming','machine','arospace_defence','automobile','medical','electrical_component','power','clean','telephone']

color = ['#f1c40f','#e67e22','#d35400','#f39c12','#1abc9c','#16a085','#2ecc71','#27ae60','#ecf0f1','#95a5a6','#7f8c8d','#bdc3c7'];

manufacturingProcessArray = ["HIGH PRESSURE DIE CASTINGS","GRAVITY DIE CASTINGS","PERMANENT MOLD CASTING","LOW PRESSURE DIE CASTING","LOST-FOAM CASTING","INVESTMENT CASTING","LOST-WAX CASTING","SAND CASTING","SHELL MOLDINGS","VACUUM MOLDINGS","HOT FORGINGS","COLD FORGINGS","ALUMINIUM EXTRUSIONS","PLASTIC INJECTION MOLDINGS","SINTERING","POWDER METALLURGY","RUBBER MOLDINGS","PRECISION MACHINING",
"FABRICATIONS","FORMING & BENDING","ASSEMBLIES"];

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
