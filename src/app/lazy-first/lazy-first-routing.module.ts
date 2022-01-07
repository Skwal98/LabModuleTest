import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyFirstComponent } from './lazy-first.component';

const routes: Routes = [
  {
    path: '',
    component: LazyFirstComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class LazyFirstRoutingModule {}
