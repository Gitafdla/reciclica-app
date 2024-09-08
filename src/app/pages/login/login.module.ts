import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { ErrorMessageComponent } from 'src/app/components/error-message/error-message.component';
import { ErrorMessageModule } from 'src/app/components/error-message/error-message.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
    ErrorMessageModule
  ],
  declarations: [
    LoginPage
  ],
  exports: [ErrorMessageComponent]  // Tambahkan ke ekspor
})
export class LoginPageModule {}
