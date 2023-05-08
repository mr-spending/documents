import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { SupportComponent } from './support.component';
import { SupportRoutingModule } from './support-routing.module';

@NgModule({
  declarations: [
    SupportComponent
  ],
  imports: [
    SupportRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [
    SupportComponent
  ]
})
export class SupportModule { }
