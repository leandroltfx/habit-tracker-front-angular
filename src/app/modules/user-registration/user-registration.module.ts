import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRegistrationRoutingModule } from './user-registration-routing.module';
import { UserRegistrationComponent } from './user-registration.component';
import { UserRegistrationProxyService } from './acl/proxy/user-registration-proxy.service';
import { UserRegistrationAdapterService } from './acl/adapter/user-registration-adapter.service';
import { UserRegistrationService } from './acl/service/user-registration.service';

@NgModule({
  declarations: [
    UserRegistrationComponent,
  ],
  imports: [
    CommonModule,

    UserRegistrationRoutingModule,
  ],
  providers: [
    UserRegistrationProxyService,
    UserRegistrationAdapterService,
    UserRegistrationService,
  ]
})
export class UserRegistrationModule { }
