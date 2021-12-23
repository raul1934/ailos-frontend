import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdmissaoService {

  constructor() { }

  delay = (ms:number) => new Promise(res => setTimeout(res, ms));
  
  async checkCPF(cpf:string)
  {

    await this.delay(3000);

    return new Promise((resolve) => {
      if(cpf == "111.222.333-44"){
        resolve({"name":"Raul Ferreira de Oliveira Neto","status":true})
      }
      else
      {
        resolve({"name":"Raul Ferreira de Oliveira Neto","status":false})
      }
    });
  }
}
