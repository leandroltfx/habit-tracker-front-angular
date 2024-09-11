import { TestBed } from '@angular/core/testing';

import { MatSnackBar } from '@angular/material/snack-bar';

import { MessageService } from './message.service';
import { CoreModule } from '../../core.module';
import { MatSnackBarStub } from '../../../shared/tests/stubs/mat-snackbat.stub';

describe('MessageService', () => {
  let service: MessageService;

  let matSnackBarStub: MatSnackBarStub;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
      ],
      providers: [
        MessageService,
        { provide: MatSnackBar, useClass: MatSnackBarStub }
      ]
    });
    service = TestBed.inject(MessageService);
    matSnackBarStub = TestBed.inject(MatSnackBar) as unknown as MatSnackBarStub;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('showMessage', () => {

    const spyOpen = spyOn(matSnackBarStub, 'open').and.callThrough();

    service.showMessage('mensagem', 'success');

    expect(spyOpen).toHaveBeenCalledWith(
      'mensagem',
      '',
      {
        panelClass: 'success',
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      }
    );
  });
});
