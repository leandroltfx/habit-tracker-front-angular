import { TestBed } from '@angular/core/testing';

import { MatSnackBar, MatSnackBarConfig, MatSnackBarModule } from '@angular/material/snack-bar';

import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  let matSnackBarSpy: jasmine.SpyObj<MatSnackBar>;

  beforeEach(() => {

    matSnackBarSpy = jasmine.createSpyObj<MatSnackBar>('MatSnackBar', ['open']);

    TestBed.configureTestingModule({
      imports: [
        MatSnackBarModule,
      ],
      providers: [
        MessageService,
        { provide: MatSnackBar, useValue: matSnackBarSpy },
      ]
    });
    service = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('showSuccessMessage - deve disparar mensagem de sucesso', () => {

    const matSnackBarConfig: MatSnackBarConfig = {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: 'message-success',
    };

    service.showSuccessMessage('Login efetuado com sucesso!');
    expect(matSnackBarSpy.open).toHaveBeenCalledWith('Login efetuado com sucesso!', '', matSnackBarConfig);
  });
});
