import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoginService } from './acl/service/login.service';
import { LoginResponseDto } from './dto/login-response.dto';

@Component({
  selector: 'ht-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public showPassword!: boolean;
  public loginForm!: FormGroup;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _loginService: LoginService,
  ) { }

  ngOnInit(): void {
    this.loginForm = this._buildLoginForm();
  }

  public login(): void {
    this._loginService.login(
      this.loginForm.controls['email'].value,
      this.loginForm.controls['password'].value,
    ).subscribe(
      (loginResponseDto: LoginResponseDto) => { }
    );
  }

  private _buildLoginForm(): FormGroup {
    return this._formBuilder.group(
      {
        email: ['', [Validators.required]],
        password: ['', [Validators.required]],
      }
    );
  }

}
