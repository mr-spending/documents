import { NgModule } from '@angular/core';

import { UserDeletionComponent } from './user-deletion.component';
import { UserDeletionRoutingModule } from './user-deletion-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    UserDeletionComponent
  ],
  imports: [
    UserDeletionRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [
    UserDeletionComponent
  ]
})
export class UserDeletionModule { }
