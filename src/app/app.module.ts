import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EagerFirstModule } from './eager-first/eager-first-module';
import { NotifyService } from './services/notify.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, EagerFirstModule, RouterModule],
  //providers: [NotifyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
