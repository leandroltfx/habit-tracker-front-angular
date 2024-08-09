import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { of } from 'rxjs';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { UserRegistrationComponent } from './user-registration.component';
import { UserRegistrationService } from './acl/service/user-registration.service';
import { MessageService } from '../../core/services/message/message.service';
import { UserRegistrationResponseDto } from '../../shared/dto/user-registration/user-registration-response.dto';

describe('UserRegistrationComponent', () => {
  let component: UserRegistrationComponent;
  let fixture: ComponentFixture<UserRegistrationComponent>;
  let router: Router;

  let userRegistrationServiceSpy: jasmine.SpyObj<UserRegistrationService>;
  let messageServiceSpy: jasmine.SpyObj<MessageService>;

  beforeEach(async () => {

    userRegistrationServiceSpy = jasmine.createSpyObj<UserRegistrationService>('UserRegistrationService', ['registerUser']);
    messageServiceSpy = jasmine.createSpyObj<MessageService>('MessageService', ['showSuccessMessage']);

    await TestBed.configureTestingModule({
      declarations: [ UserRegistrationComponent ],
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        RouterTestingModule,

        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
      ],
      providers: [
        { provide: UserRegistrationService, useValue: userRegistrationServiceSpy },
        { provide: MessageService, useValue: messageServiceSpy },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRegistrationComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('registerUser - deve cadastrar usuário, disparar mensagem de sucesso e rotear para a home', () => {

    const spyNavigate = spyOn(router, 'navigate');

    const userRegistrationResponseDto: UserRegistrationResponseDto = new UserRegistrationResponseDto();
    userRegistrationResponseDto.message = 'Usuário cadastrado com sucesso!';
    userRegistrationResponseDto.loggedUser.username = 'username';
    userRegistrationResponseDto.loggedUser.email = 'email@email.com';

    userRegistrationServiceSpy.registerUser.and.returnValue(of(userRegistrationResponseDto));

    component.userRegistrationForm.controls['username'].setValue('username');
    component.userRegistrationForm.controls['email'].setValue('email@email.com');
    component.userRegistrationForm.controls['password'].setValue('asd123asd');
    component.userRegistrationForm.controls['confirmPassword'].setValue('asd123asd');

    component.registerUser();

    expect(messageServiceSpy.showSuccessMessage).toHaveBeenCalledWith('Usuário cadastrado com sucesso!');
    expect(spyNavigate).toHaveBeenCalledWith(['/home']);
  });
});
