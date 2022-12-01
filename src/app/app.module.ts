import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StyleClassModule } from 'primeng/styleclass';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

import { PageoneComponent } from './pageone/pageone.component';
import { PagetwoComponent } from './pagetwo/pagetwo.component';
import { PagethreeComponent } from './pagethree/pagethree.component';
import { ChipModule } from 'primeng/chip';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    PagetwoComponent,
    PagethreeComponent,
    PageoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StyleClassModule,
    CardModule,
    ButtonModule,
    ChipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
