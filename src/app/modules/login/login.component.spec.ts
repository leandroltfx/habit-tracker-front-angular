import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { LoginComponent } from './login.component';
import { LoginService } from './acl/service/login.service';
import { MessageService } from '../../core/services/message/message.service';
import { LoginServiceStub } from '../../shared/tests/stubs/login.service.stub';
import { MessageServiceStub } from '../../shared/tests/stubs/message.service.stub';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let loginServiceStub: LoginServiceStub;
  let messageServiceStub: MessageServiceStub;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,

        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
      ],
      providers: [
        { provide: LoginService, useClass: LoginServiceStub },
        { provide: MessageService, useClass: MessageServiceStub },
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    loginServiceStub = TestBed.inject(LoginService) as unknown as LoginServiceStub;
    messageServiceStub = TestBed.inject(MessageService) as unknown as MessageServiceStub;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('login - deve disparar mensagem de sucesso de login', () => {

    const spyLogin = spyOn(loginServiceStub, 'login').and.callThrough();
    const spyShowMessage = spyOn(messageServiceStub, 'showMessage').and.callThrough();

    component.loginForm.controls['email'].setValue('admin@email.com');
    component.loginForm.controls['password'].setValue('admin123');

    component.login();

    expect(spyLogin).toHaveBeenCalledWith('admin@email.com', 'admin123');
    expect(spyShowMessage).toHaveBeenCalledWith('Login efetuado com sucesso!', 'success');
  });
});
