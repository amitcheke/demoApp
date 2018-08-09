import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { ButtonsModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BuyerComponent } from './buyer/buyer.component';
import { FragmentPolyfillModule } from "./fragment-polyfill.module";

const appRoutes: Routes =[
  {path:'', component: HomeComponent},
  {path:'buyer', component: BuyerComponent},
  {path:'home', component: HomeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BuyerComponent
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
