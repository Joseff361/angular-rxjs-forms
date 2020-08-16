//Imports 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //The js file = component


import { MatToolbarModule } from '@angular/material/toolbar';
import { MenuComponent } from './menu/menu.component'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DishdetailComponent } from './dishdetail/dishdetail.component';

import { DishService } from '../app/services/dish.service';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component'; 

import { PromotionService } from './services/promotion.service';
import { LeaderService } from './services/leader.service';

//Decorator: Is a function that modifies js classes
@NgModule({ // Allow you spcify some details about the module
  //Metadata
  declarations: [ //components, directives and pipes
    AppComponent, MenuComponent, DishdetailComponent, HeaderComponent, FooterComponent, HomeComponent, AboutComponent, ContactComponent
  ],
  imports: [ //third party modules
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    FontAwesomeModule
  ],
  providers: [DishService, PromotionService, LeaderService], //services
  bootstrap: [AppComponent]
  //The root Module doesn't have exports
})
//Each module is a class
export class AppModule { }
