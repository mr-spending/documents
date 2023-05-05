import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const declarations = [];

const sharedModules = [
  FormsModule,
  ReactiveFormsModule,
  CommonModule
];

@NgModule({
  declarations: [

  ],
  imports: [
    ...sharedModules,
  ],
  exports: [
    ...sharedModules,

  ]
})
export class SharedModule { }
