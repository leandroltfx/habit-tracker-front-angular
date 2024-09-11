import { Injectable } from '@angular/core';

import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

import { MessageType } from '../../models/types/message.type';

@Injectable()
export class MessageService {

  private _duration: number = 5000;
  private _horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  private _verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private readonly _matSnackBar: MatSnackBar
  ) { }

  public showMessage(
    message: string,
    type: MessageType
  ): void {
    this._matSnackBar.open(
      message,
      '',
      {
        panelClass: type,
        duration: this._duration,
        horizontalPosition: this._horizontalPosition,
        verticalPosition: this._verticalPosition,
      }
    );
  }
}
