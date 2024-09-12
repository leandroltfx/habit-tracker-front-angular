import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { UserRegistrationRoutingModule } from './user-registration-routing.module';
import { UserRegistrationComponent } from './user-registration.component';
import { UserRegistrationService } from './acl/service/user-registration.service';
import { UserRegistrationAdapterService } from './acl/adapter/user-registration-adapter.service';
import { UserRegistrationProxyService } from './acl/proxy/user-registration-proxy.service';

@NgModule({
  declarations: [
    UserRegistrationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,

    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,

    UserRegistrationRoutingModule
  ],
  providers: [
    UserRegistrationService,
    UserRegistrationAdapterService,
    UserRegistrationProxyService,
  ]
})
export class UserRegistrationModule { }
