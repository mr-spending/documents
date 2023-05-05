import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { PrivacyPolicyComponent } from './privacy-policy.component';
import { PrivacyPolicyRoutingModule } from './privacy-policy-routing.module';

@NgModule({
  declarations: [
    PrivacyPolicyComponent
  ],
  imports: [
    PrivacyPolicyRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [
    PrivacyPolicyComponent
  ]
})
export class PrivacyPolicyModule { }
