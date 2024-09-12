import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { UserRegistrationComponent } from './user-registration.component';
import { UserRegistrationService } from './acl/service/user-registration.service';
import { MessageServiceStub } from '../../shared/tests/stubs/message.service.stub';
import { MessageService } from '../../core/services/message/message.service';
import { UserRegistrationServiceStub } from '../../shared/tests/stubs/user-registration.service.stub';

describe('UserRegistrationComponent', () => {
  let component: UserRegistrationComponent;
  let fixture: ComponentFixture<UserRegistrationComponent>;

  let userRegistrationServiceStub: UserRegistrationServiceStub;
  let messageServiceStub: MessageServiceStub;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRegistrationComponent ],
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        RouterTestingModule,

        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
      ],
      providers: [
        { provide: UserRegistrationService, useClass: UserRegistrationServiceStub },
        { provide: MessageService, useClass: MessageServiceStub },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRegistrationComponent);
    component = fixture.componentInstance;

    userRegistrationServiceStub = TestBed.inject(UserRegistrationService) as unknown as UserRegistrationServiceStub;
    messageServiceStub = TestBed.inject(MessageService) as unknown as MessageServiceStub;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('registerUser - deve disparar mensagem de sucesso de cadastro de usuário', () => {

    const spyRegisterUser = spyOn(userRegistrationServiceStub, 'registerUser').and.callThrough();
    const spyShowMessage = spyOn(messageServiceStub, 'showMessage').and.callThrough();

    component.userRegistrationForm.controls['username'].setValue('admin');
    component.userRegistrationForm.controls['email'].setValue('admin@email.com');
    component.userRegistrationForm.controls['password'].setValue('admin123#');
    component.userRegistrationForm.controls['confirmPassword'].setValue('admin123#');

    component.registerUser();

    expect(spyRegisterUser).toHaveBeenCalledWith('admin', 'admin@email.com', 'admin123#');
    expect(spyShowMessage).toHaveBeenCalledWith('Usuário cadastrado com sucesso!', 'success');
  });

  it('registerUser - deve impedir o cadastro de usuário se username estiver inválido', () => {

    const spyRegisterUser = spyOn(userRegistrationServiceStub, 'registerUser').and.callThrough();
    const spyShowMessage = spyOn(messageServiceStub, 'showMessage').and.callThrough();

    component.userRegistrationForm.controls['username'].setValue('user name');
    component.userRegistrationForm.controls['email'].setValue('admin@email.com');
    component.userRegistrationForm.controls['password'].setValue('admin123#');
    component.userRegistrationForm.controls['confirmPassword'].setValue('admin123#');

    component.registerUser();

    expect(spyRegisterUser).not.toHaveBeenCalled();
    expect(spyShowMessage).not.toHaveBeenCalled();
  });

  it('registerUser - deve impedir o cadastro de usuário se email estiver inválido', () => {

    const spyRegisterUser = spyOn(userRegistrationServiceStub, 'registerUser').and.callThrough();
    const spyShowMessage = spyOn(messageServiceStub, 'showMessage').and.callThrough();

    component.userRegistrationForm.controls['username'].setValue('username');
    component.userRegistrationForm.controls['email'].setValue('admin@');
    component.userRegistrationForm.controls['password'].setValue('admin123#');
    component.userRegistrationForm.controls['confirmPassword'].setValue('admin123#');

    component.registerUser();

    expect(spyRegisterUser).not.toHaveBeenCalled();
    expect(spyShowMessage).not.toHaveBeenCalled();
  });

  it('registerUser - deve impedir o cadastro de usuário se a senha estiver inválida', () => {

    const spyRegisterUser = spyOn(userRegistrationServiceStub, 'registerUser').and.callThrough();
    const spyShowMessage = spyOn(messageServiceStub, 'showMessage').and.callThrough();

    component.userRegistrationForm.controls['username'].setValue('username');
    component.userRegistrationForm.controls['email'].setValue('admin@email.com');
    component.userRegistrationForm.controls['password'].setValue('admin123');
    component.userRegistrationForm.controls['confirmPassword'].setValue('admin123');

    component.registerUser();

    expect(spyRegisterUser).not.toHaveBeenCalled();
    expect(spyShowMessage).not.toHaveBeenCalled();
  });

  it('registerUser - deve impedir o cadastro de usuário se a confirmação da senha estiver errada', () => {

    const spyRegisterUser = spyOn(userRegistrationServiceStub, 'registerUser').and.callThrough();
    const spyShowMessage = spyOn(messageServiceStub, 'showMessage').and.callThrough();

    component.userRegistrationForm.controls['username'].setValue('username');
    component.userRegistrationForm.controls['email'].setValue('admin@email.com');
    component.userRegistrationForm.controls['password'].setValue('admin123#');
    component.userRegistrationForm.controls['confirmPassword'].setValue('admin123$$$');

    component.registerUser();

    expect(spyRegisterUser).not.toHaveBeenCalled();
    expect(spyShowMessage).not.toHaveBeenCalled();
  });
});
