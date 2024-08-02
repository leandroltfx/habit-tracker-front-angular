import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  ) { }

  ngOnInit(): void {
    this.loginForm = this._buildLoginForm();
  }

  private _buildLoginForm(): FormGroup {
    return this._formBuilder.group({
      email: null,
      password: null,
    });
  }

}
