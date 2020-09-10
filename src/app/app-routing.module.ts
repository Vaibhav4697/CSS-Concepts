import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CssHomeComponent } from './css-home/css-home.component';
import { OnlineEditorComponent } from './online-editor/online-editor.component';

const routes: Routes = [
  { path: '', component: CssHomeComponent },
  { path: 'online-editor', component: OnlineEditorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
