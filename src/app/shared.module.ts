import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  //imports: [RouterModule],
  //not required
  //https://angular.io/guide/sharing-ngmodules
  exports: [RouterModule],
})
export class SharedModule {}
