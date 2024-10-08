import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { MessageService } from '../../core/services/message/message.service';
import { UserRegistrationService } from './acl/service/user-registration.service';
import { RegisterUserResponseDto } from '../../shared/dto/register-user/register-user-response.dto';

@Component({
  selector: 'ht-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  public showPassword!: boolean;
  public showConfirmPassword!: boolean;
  public userRegistrationForm!: FormGroup;

  private _patternUsername: RegExp = /^[A-Za-z][A-Za-z\d]{2,}$/;
  private _patternEmail: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  private _patternPassword: RegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|:<>?~\-])[A-Za-z\d!@#$%^&*()_+{}|:<>?~\- ]{6,}$/;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _messageService: MessageService,
    private readonly _userRegistrationService: UserRegistrationService,
  ) { }

  ngOnInit(): void {
    this.userRegistrationForm = this._buildUserRegistrationForm();
  }

  public registerUser(): void {
    if (this.userRegistrationForm.valid) {
      this._userRegistrationService.registerUser(
        this.userRegistrationForm.controls['username'].value,
        this.userRegistrationForm.controls['email'].value,
        this.userRegistrationForm.controls['password'].value,
      ).subscribe(
        (registerUserResponseDto: RegisterUserResponseDto) => {
          this._messageService.showMessage(registerUserResponseDto.message, 'success');
        }
      );
    } else {
      Object.values(this.userRegistrationForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  public updateConfirmValidator(): void {
    Promise.resolve().then(() => this.userRegistrationForm.controls['confirmPassword'].updateValueAndValidity());
  }

  private _confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.userRegistrationForm.controls['password'].value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  private _buildUserRegistrationForm(): FormGroup {
    return this._formBuilder.group(
      {
        username: ['', [Validators.required, Validators.pattern(this._patternUsername)]],
        email: ['', [Validators.required, Validators.pattern(this._patternEmail)]],
        password: ['', [Validators.required, Validators.pattern(this._patternPassword)]],
        confirmPassword: ['', [Validators.required, this._confirmationValidator]],
      }
    );
  }

}
