import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

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
    ReactiveFormsModule,

    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,

    UserRegistrationRoutingModule,
  ],
  providers: [
    UserRegistrationProxyService,
    UserRegistrationAdapterService,
    UserRegistrationService,
  ]
})
export class UserRegistrationModule { }
