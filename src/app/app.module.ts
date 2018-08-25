import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router'
import { ButtonsModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FragmentPolyfillModule } from "./shared_module/fragment-polyfill.module";
import { FirstStepComponent } from './first-step/first-step.component';
import { SecondStepComponent } from './second-step/second-step.component';

import { BuyerService } from './services/buyer.service';


const appRoutes: Routes =[
  {path:'', component: HomeComponent},
  {path:'first-step', component: FirstStepComponent},
  {path:'home', component: HomeComponent},
  {path:'second-step', component: SecondStepComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FirstStepComponent,
    SecondStepComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ButtonsModule.forRoot(),
    FragmentPolyfillModule.forRoot({
                smooth: true
    }),
    RouterModule.forRoot(appRoutes, {
                // Tell the router to use the HashLocationStrategy.
                useHash: true,
                enableTracing: false
})
  ],
  providers: [BuyerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
