import { CdkStepper } from '@angular/cdk/stepper';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdmissaoService } from './admissao.service';

@Component({
  selector: 'app-admissao',
  templateUrl: './admissao.component.html',
  styleUrls: ['./admissao.component.scss'],
})
export class AdmissaoComponent {


  @ViewChild('cdkStepper')
  cdkStepper: CdkStepper | undefined;

  _admissaoForm!: FormGroup;
  validCPF = false;
  name = "";
  validatingCPF = false;

  get admissaoForm(): any {
    return this._admissaoForm.get('steps');
  }

  constructor(private formBuilder: FormBuilder, private admissaoService: AdmissaoService) {

    this._admissaoForm = this.formBuilder.group({
      steps: this.formBuilder.array([
        this.formBuilder.group({
          cpf: new FormControl("", [Validators.required, Validators.minLength(14), Validators.maxLength(14)])
        },{ updateOn: 'submit' }),
      ]),
    });

  }

  frmSubmit(currentForm: FormGroup) {

    if (this.cdkStepper?.selectedIndex == 0) {

      if(currentForm.valid)
      {
        this.validatingCPF = true;
        this.admissaoService.checkCPF(currentForm.controls['cpf'].value).then((data: any) => {
          this.validCPF = data.status;
          this.name = data.name;
          if(!data.status)
          {
            currentForm.controls['cpf'].setErrors({'invalid': true});
          }
  
          this.validatingCPF = false;
        });
      }
     
    }

    
  };

  next() {
    this.cdkStepper?.next();
  }

  previous() {
    this.cdkStepper?.previous();
  }
}
