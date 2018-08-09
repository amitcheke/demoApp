import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { ButtonsModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FragmentPolyfillModule } from "./shared_module/fragment-polyfill.module";
import { BuyerFirstStepComponent } from './buyer-first-step/buyer-first-step.component';
import { BuyerSecondStepComponent } from './buyer-second-step/buyer-second-step.component';


const appRoutes: Routes =[
  {path:'', component: HomeComponent},
  {path:'buyer-first-step', component: BuyerFirstStepComponent},
  {path:'home', component: HomeComponent},
  {path:'buyer-second-step', component: BuyerSecondStepComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BuyerFirstStepComponent,
    BuyerSecondStepComponent
  ],
  imports: [
    BrowserModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
