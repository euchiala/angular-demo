import { NgModule } from '@angular/core';
import { flush } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { MemberFormComponent } from './member-form/member-form.component';
import { MemberListComponent } from './member-list/member-list.component';

const routes: Routes = [
  {
    path:'members',
    pathMatch:'full',
    component:MemberListComponent,
  },{
    path:'createMember',
    pathMatch:'full',
    component:MemberFormComponent,
  },{
    path:'members/:id/edit',
    pathMatch:'full',
    component:MemberFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
