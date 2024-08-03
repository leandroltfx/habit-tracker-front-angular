import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { LoginService } from './login-acl/service/login-service';
import { LoginRequestContract } from '../../shared/contracts/request/login-request-contract.model';
import { MessageService } from '../../core/services/message/message.service';

@Component({
  selector: 'ht-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;
  public hiddenPassword: boolean = false;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _loginService: LoginService,
    private readonly _messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.loginForm = this._buildLoginForm();
  }

  public login(): void {
    const loginRequestContract = new LoginRequestContract(
      this.loginForm.controls['email'].value,
      this.loginForm.controls['password'].value,
    );
    this._loginService.login(
      loginRequestContract
    ).subscribe(
      {
        next: dataSuccess => this._messageService.showSuccessMessage(dataSuccess.message)
      }
    )
  }

  private _buildLoginForm(): FormGroup {
    return this._formBuilder.group({
      email: null,
      password: null,
    });
  }

}
