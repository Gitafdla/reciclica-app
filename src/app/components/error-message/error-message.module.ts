import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from 'src/app/components/error-message/error-message.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ErrorMessageComponent
  ],
  declarations: [
    ErrorMessageComponent
  ]
})
export class ErrorMessageModule {}
