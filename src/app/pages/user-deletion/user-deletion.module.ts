import { NgModule } from '@angular/core';

import { UserDeletionComponent } from './user-deletion.component';
import { UserDeletionRoutingModule } from './user-deletion-routing.module';

@NgModule({
  declarations: [
    UserDeletionComponent
  ],
  imports: [
    UserDeletionRoutingModule
  ],
  providers: [],
  bootstrap: [UserDeletionComponent]
})
export class UserDeletionModule { }
