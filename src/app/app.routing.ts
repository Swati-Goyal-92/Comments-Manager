import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {CommentComponent} from './comment/comment.component';

export const routes: Routes = [
  {path: '', component: AppComponent},  
  {path: 'comment/:id', component: CommentComponent},  
  {path: '**', component: AppComponent}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
