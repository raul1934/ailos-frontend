import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { NgxMaskModule } from 'ngx-mask';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [InputComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  exports: [InputComponent]
})
export class InputModule { }
