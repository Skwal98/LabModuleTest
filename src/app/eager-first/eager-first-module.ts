import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotifyService } from '../services/notify.service';
import { SharedModule } from '../shared.module';
import { EagerFirstComponent } from './eager-first.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [EagerFirstComponent],
  bootstrap: [],
  exports: [EagerFirstComponent],
})
export class EagerFirstModule {}
