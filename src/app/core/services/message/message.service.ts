import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable()
export class MessageService {

  private readonly _configMessageSuccess: MatSnackBarConfig = {
    duration: 5000,
    horizontalPosition: 'center',
    verticalPosition: 'top',
    panelClass: 'message-success',
  };

  constructor(
    private readonly _matSnackBar: MatSnackBar,
  ) { }

  public showSuccessMessage(message: string): void {
    this._matSnackBar.open(message, '', this._configMessageSuccess);
  }
}
