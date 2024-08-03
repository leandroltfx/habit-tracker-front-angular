import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { LoginService } from './login-acl/service/login-service';
import { MessageService } from '../../core/services/message/message.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let loginServiceSpy: jasmine.SpyObj<LoginService>;
  let messageServiceSpy: jasmine.SpyObj<MessageService>;

  beforeEach(async () => {

    loginServiceSpy = jasmine.createSpyObj('LoginService', ['login']);
    messageServiceSpy = jasmine.createSpyObj('MessageService', ['showMessageSuccess']);

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
});
