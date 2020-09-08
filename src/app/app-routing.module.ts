import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CssHomeComponent } from './css-home/css-home.component';

const routes: Routes = [
  { path: '', component: CssHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
