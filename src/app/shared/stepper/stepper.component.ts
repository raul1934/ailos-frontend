import { CdkStepper } from '@angular/cdk/stepper';
import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

export interface StepperItem{
  text:string;
  selector:string;
  formGroup?:FormGroup;
  validate?:Function;
}

@Component({
  selector: 'als-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers: [{provide: CdkStepper, useExisting: StepperComponent}]
})
export class StepperComponent extends CdkStepper {

  onClick(index: number): void {
    this.selectedIndex = index;
  }

  stringify(obj:any)
  {
    console.log(obj);
  }

}
