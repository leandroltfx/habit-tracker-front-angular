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

import { LoginComponent } from './login.component';
import { LoginService } from './acl/service/login-service';
import { MessageService } from '../../core/services/message/message.service';
import { LoginResponseDto } from '../../shared/dto/login/login-response.dto';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;

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
        { provide: LoginService, useValue: loginServiceSpy },
        { provide: MessageService, useValue: messageServiceSpy },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('login - deve efetuar login, disparar mensagem de sucesso e rotear para a home', () => {

    const spyNavigate = spyOn(router, 'navigate');

    const loginResponseDto: LoginResponseDto = new LoginResponseDto();
    loginResponseDto.message = 'Login efetuado com sucesso!';

    loginServiceSpy.login.and.returnValue(of(loginResponseDto));

    component.login();

    expect(messageServiceSpy.showSuccessMessage).toHaveBeenCalledWith('Login efetuado com sucesso!');
    expect(spyNavigate).toHaveBeenCalledWith(['/home']);
  });
});
