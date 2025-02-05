import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { CommonModule } from '@angular/common'; // Importa CommonModule

import { AppComponent } from './app.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Asegúrate de que FormsModule está aquí
    CommonModule // Asegúrate de que CommonModule está aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
