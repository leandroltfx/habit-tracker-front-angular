import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  ) { }

  ngOnInit(): void {
    this.loginForm = this._buildLoginForm();
  }

  public login(): void {
    console.log(this.loginForm.controls);
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
