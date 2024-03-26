import { RouterModule, Routes } from '@angular/router';
import { OneComponent } from './one/one.component';

import { NgModule } from '@angular/core';

const routes: Routes = [
 {path:'one',component:OneComponent}
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRountingModule {}
