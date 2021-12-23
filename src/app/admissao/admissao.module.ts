import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperModule } from '../shared/stepper/stepper.module';
import { RouterModule, Routes } from '@angular/router';
import { AdmissaoComponent } from './admissao.component';
import { ButtonModule } from '../shared/button/button.module';
import { InputModule } from '../shared/input/input.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CdkStepperModule } from '@angular/cdk/stepper';

const routes: Routes = [
  {path: '',
  component: AdmissaoComponent
}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CdkStepperModule,
    StepperModule,
    ButtonModule,
    InputModule
  ],
  exports: [RouterModule],
  declarations:[
    
  ]
})
export class AdmissaoModule { }
