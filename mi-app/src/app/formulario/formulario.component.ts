import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  formulario: FormGroup;
  isFormValid = false; // Propiedad para rastrear el estado del formulario

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });

    this.formulario.statusChanges.subscribe(() => {
      this.isFormValid = this.formulario.valid; // Actualizar el estado del formulario
    });
  }

  onSubmit() {
    if (this.formulario.valid) {


      const isConfirmed = window.confirm('¿Estás seguro de que deseas enviar el formulario?');

      const nombreControl = this.formulario.get('nombre');
      const emailControl = this.formulario.get('email');
  
      if (nombreControl && emailControl && isConfirmed) {
        const formValues = {
          Nombre: nombreControl.value,
          Email: emailControl.value
        };

    


      
      const formString = JSON.stringify(formValues, null, 2);

      // Abre una nueva ventana y muestra los valores del formulario si es posible
      const nuevaVentana = window.open('', '_blank', 'width=600,height=400');
      
      if (nuevaVentana) {
        nuevaVentana.document.write('<pre>' + formString + '</pre');
        console.log('Formulario enviado');
        console.log(`Nombre: ${nombreControl.value}`);
        console.log(`Email: ${emailControl.value}`);
      } else {
        console.log('No se pudo abrir la nueva ventana');
      }
    } else {
      console.log('Envío del formulario cancelado');
      }
    }
  }
}
