import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";
import { BuyerService } from './../services/buyer.service';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.css']
})
export class FirstStepComponent implements OnInit {
<<<<<<< HEAD
  dataObj:object;
  businessDetails:any = {};
=======
	dataObj:object;
	businessDetails:any = {};
>>>>>>> 6f69cff526755646135c4fa5c0f6529f630f16be
  constructor(public buyerService: BuyerService,private router: Router) { 
 
  }

  ngOnInit() {
     this.buyerService.castBusinessDetails.subscribe(
      data => this.businessDetails = data
    );
     
     if(this.isEmptyObject(this.businessDetails)){
       this.businessDetails = {service:null,industry:null,commodity:null,process:null,otherService:null};
     }
  }

  

  services = ["DESIGNING (CAD/CAE)","MANUFACTURING","SUPPLIER ASSESSMENT","TOOLING & PROTOTYPE","REVERSE ENGINEERING","AUTOMATION","SUPPLY CHAIN MANAGEMENT","WAREHOUSING","SOURCING","PROPRIOTORY PURCHASING","PROPRIOTORY SALES","3D SCANNING & PRINTING","OTHERS (SPECIFY)"
];

processes = ["HIGH PRESSURE DIE CASTINGS"
,"GRAVITY DIE CASTINGS"
,"PERMANENT MOLD CASTING"
,"LOW PRESSURE DIE CASTING"
,"LOST-FOAM CASTING"
,"INVESTMENT CASTING" 
,"LOST-WAX CASTING"
,"SAND CASTING"
,"SHELL MOLDINGS"
,"VACUUM MOLDINGS"
,"HOT FORGINGS"
,"COLD FORGINGS"
,"ALUMINIUM EXTRUSIONS"
,"EXTRUSIONS"
,"PLASTIC INJECTION MOLDINGS"
,"SINTERING"
,"POWDER METALLURGY" 
,"RUBBER MOLDINGS"
,"PRECISION MACHINING"
,"TURNING"
,"FABRICATIONS"
,"FORMING & BENDING"
,"ASSEMBLIES"
,"OTHERS (SPECIFY)"
];

commodities = ["COPPER","BRASS","ZINC","ALUMINIUM","BRONZE","MAGNESIUM","STAINLESS STEEL","CARBON STEEL","STEEL (OTHER)","SPECIAL ALLOY","DUCTILE IRON","GREY IRON","IRON (OTHER)","POWDER METAL","PLASTIC","RUBBER","GLASS","TITANIUMTIN","OTHERS (SPECIFY)"
];

industries = ["INDUSTRIAL MACHINERY","AEROSPACE & DEFENSE","AUTOMOBILE COMPONENTS","ELECTRICAL COMPONENTS & EQUIPMENT","OIL & GAS ENERGY",
"CHEMICAL INDUSTRY",
"PACKAGING INDUSTRY"
,  "MINING INDUSTRY"
,  "PAPER INDUSTRY"
,  "AGRICULTURAL & FARM INDUSTRY"
,  "CONSTRUCTION"
,  "HEAVY INDUSTRIAL & ELECTRICAL EQUIPMENT"
,  "HEALTH CARE EQUIPMENT"
,  "HOUSEHOLD & COMMERCIAL APPLIANCES" 
,  "ELECTRONIC EQUIPMENT & COMPONENTS"
,  "TELECOMMUNICATION" 
,  "UTILITIES"
,  "OTHERS (SPECIFY)"];

  submit(){
  console.log('-------------------');
  console.log(this.businessDetails);
  console.log('-------------------');
 this.dataObj = this.businessDetails;
  this.buyerService.setFirstStepData(this.dataObj);

    this.router.navigate(['second-step']);
  }

  isEmptyObject(obj) {
    for(var prop in obj) {
       if (obj.hasOwnProperty(prop)) {
          return false;
       }
    }

    return true;
}

clearFilter(event){

}

onFileChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];

    }
}

}