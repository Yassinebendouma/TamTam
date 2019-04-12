import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AlertModule } from 'ngx-bootstrap';
import { ModalModule, BsModalRef } from 'ngx-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';
import { SinginComponent } from './singin/singin.component';
import { HomeComponent } from './home/home.component';
 

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SectionComponent,
    FooterComponent,
    SinginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    AlertModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [BsModalRef],
  bootstrap: [AppComponent]
 
 
})
export class AppModule { }
