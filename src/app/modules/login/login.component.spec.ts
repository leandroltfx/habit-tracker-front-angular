import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { of } from 'rxjs';

import { LoginComponent } from './login.component';
import { LoginService } from './login-acl/service/login-service';
import { MessageService } from '../../core/services/message/message.service';
import { LoginResponseDto } from 'src/app/shared/dto/login-response-dto';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let loginServiceSpy: jasmine.SpyObj<LoginService>;
  let messageServiceSpy: jasmine.SpyObj<MessageService>;

  beforeEach(async () => {

    loginServiceSpy = jasmine.createSpyObj<LoginService>('LoginService', ['login']);
    messageServiceSpy = jasmine.createSpyObj<MessageService>('MessageService', ['showSuccessMessage']);

    await TestBed.configureTestingModule({
      declarations: [
        LoginComponent,
      ],
      imports: [
        ReactiveFormsModule,
      ],
      providers: [
        { provide: LoginService, useValue: loginServiceSpy },
        { provide: MessageService, useValue: messageServiceSpy },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('login - deve efetuar login e disparar mensagem de sucesso', () => {

    const loginResponseDto: LoginResponseDto = new LoginResponseDto('Login efetuado com sucesso!');
    loginServiceSpy.login.and.returnValue(of(loginResponseDto));

    component.login();

    expect(messageServiceSpy.showSuccessMessage).toHaveBeenCalledWith('Login efetuado com sucesso!');
  });
});
