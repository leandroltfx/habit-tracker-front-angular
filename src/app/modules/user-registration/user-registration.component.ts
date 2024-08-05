import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { UserRegistrationService } from './acl/service/user-registration.service';
import { UserRegistrationRequestContract } from '../../shared/contracts/request/user-registration/user-registration-request.contract';
import { UserRegistrationResponseDto } from '../../shared/dto/user-registration/user-registration-response.dto';
import { MessageService } from '../../core/services/message/message.service';

@Component({
  selector: 'ht-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  public userRegistrationForm!: FormGroup;
  public hiddenPassword: boolean = false;
  public hiddenConfirmPassword: boolean = false;
  public minLengthUsername: number = 3;
  public maxLengthUsername: number = 30;
  public minLengthPassword: number = 8;
  public maxLengthPassword: number = 80;

  private _emailPattern: RegExp = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
  private _usernamePattern: RegExp = /^[a-zA-Z0-9]+$/;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _userRegistrationService: UserRegistrationService,
    private readonly _messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.userRegistrationForm = this._buildUserRegistrationForm();
  }

  public registerUser(): void {
    if (!this.userRegistrationForm.valid) return;

    const userRegistrationRequestContract: UserRegistrationRequestContract = new UserRegistrationRequestContract(
      this.userRegistrationForm.controls['username'].value,
      this.userRegistrationForm.controls['email'].value,
      this.userRegistrationForm.controls['password'].value,
    );
    this._userRegistrationService.registerUser(
      userRegistrationRequestContract
    ).subscribe(
      {
        next: (userRegistrationResponseDto: UserRegistrationResponseDto) => {
          this._messageService.showSuccessMessage(userRegistrationResponseDto.message);
        }
      }
    );
  }

  public updateConfirmValidator(): void {
    Promise.resolve().then(() => this.userRegistrationForm.controls['confirmPassword'].updateValueAndValidity());
  }

  private _buildUserRegistrationForm(): FormGroup {
    return this._formBuilder.group({
      username: [null, [Validators.required, Validators.pattern(this._usernamePattern), Validators.minLength(this.minLengthUsername), Validators.maxLength(this.maxLengthUsername)]],
      email: [null, [Validators.required, Validators.pattern(this._emailPattern)]],
      password: [null, [Validators.required, Validators.minLength(this.minLengthPassword), Validators.maxLength(this.maxLengthPassword)]],
      confirmPassword: [null, [Validators.required, this._confirmationValidator]],
    });
  }

  private _confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.userRegistrationForm.controls['password'].value) {
      return { confirm: true, error: true };
    }
    return {};
  };

}
