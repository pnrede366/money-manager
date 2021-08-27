import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TaskmoneymangerComponent} from './taskmoneymanger/taskmoneymanger.component';
import { HttpssComponent } from './015/httpss/httpss.component';
import { HttpClientModule } from '@angular/common/http';
import { JsonserverComponent } from './jsonserver/jsonserver.component';
import { TodoComponent } from './todo/todo.component';
import { HomeComponent } from './017/routing/home/home.component';
import { AboutComponent } from './017/routing/about/about.component';
import { ContactComponent } from './017/routing/contact/contact.component';
import { NavbarComponent } from './017/routing/navbar/navbar.component';
import { PageNotFoundComponent } from './017/routing/page-not-found/page-not-found.component';
// import { HttpComponent } from './015/http/http.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskmoneymangerComponent,
    HttpssComponent,
    JsonserverComponent,
    TodoComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
