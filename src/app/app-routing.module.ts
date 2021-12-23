import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissaoComponent } from './admissao/admissao.component';

const routes: Routes = [
  { path: '',  loadChildren: () => import('./admissao/admissao.module').then(m => m.AdmissaoModule)
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
