import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostlistComponent } from './post-list/post-list.component';
import { PostlistitemComponent } from './post-list/post-list-item/post-list-item.component';



@NgModule({
  declarations: [
    AppComponent,
    PostlistComponent,
    PostlistitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
