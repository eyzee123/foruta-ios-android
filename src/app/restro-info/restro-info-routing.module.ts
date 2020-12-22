import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestroInfoPage } from './restro-info.page';

const routes: Routes = [
  {
    path: '',
    component: RestroInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestroInfoPageRoutingModule {}
