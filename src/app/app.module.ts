import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { AdmissaoComponent } from './admissao/admissao.component';
import { MenuComponent } from './shared/menu/menu.component';
import { StepperModule } from './shared/stepper/stepper.module';
import { ButtonModule } from './shared/button/button.module';
import { InputModule } from './shared/input/input.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { UsercardComponent } from './admissao/usercard/usercard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdmissaoComponent,
    MenuComponent,
    UsercardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CdkStepperModule,
    StepperModule,
    ButtonModule,
    InputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
