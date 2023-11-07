import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule en lugar de FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiDirectivaDirective } from './mi-directiva.directive';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    MiDirectivaDirective,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, // Usa ReactiveFormsModule en lugar de FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
