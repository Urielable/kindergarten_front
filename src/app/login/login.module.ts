import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [LoginComponent],
  imports: [ RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ LoginComponent ]
})

export class LoginModule { }
