import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserDeletionComponent } from './user-deletion.component';

const routes: Routes = [
  {
    path: '',
    component: UserDeletionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDeletionRoutingModule {}
