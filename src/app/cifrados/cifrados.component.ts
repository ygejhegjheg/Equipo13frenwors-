import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cifrados',
  templateUrl: './cifrados.component.html',
  styleUrls: ['./cifrados.component.css']
})
export class CifradosComponent {
  cifradoForm: FormGroup;
  descifradoForm: FormGroup;
  resultadoCifrado: string = '';
  resultadoDescifrado: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.cifradoForm = this.fb.group({
      mensaje: ['', Validators.required],
      desplazamiento: ['', Validators.required]
    });

    this.descifradoForm = this.fb.group({
      mensajeCifrado: ['', Validators.required],
      desplazamientoDelCifrado: ['', Validators.required]
    });
  }

  cifrarCesar(texto: string, desplazamiento: number): string {
    let cifrado = '';
    for (let i = 0; i < texto.length; i++) {
      let charCode = texto.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        cifrado += String.fromCharCode(((charCode - 65 + desplazamiento) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        cifrado += String.fromCharCode(((charCode - 97 + desplazamiento) % 26) + 97);
      } else {
        cifrado += texto.charAt(i);
      }
    }
    return cifrado;
  }

  manejarCifrado() {
    const mensaje = this.cifradoForm.get('mensaje')?.value;
    const desplazamiento = parseInt(this.cifradoForm.get('desplazamiento')?.value);
    
    if (isNaN(desplazamiento) || !mensaje) {
      alert('Por favor, ingrese un mensaje y un desplazamiento válido.');
      return;
    }

    this.resultadoCifrado = this.cifrarCesar(mensaje, desplazamiento);
  }

  manejarDescifrado() {
    const mensajeCifrado = this.descifradoForm.get('mensajeCifrado')?.value;
    const desplazamiento = parseInt(this.descifradoForm.get('desplazamientoDelCifrado')?.value);

    if (isNaN(desplazamiento) || !mensajeCifrado) {
      alert('Por favor, ingrese un mensaje cifrado y un desplazamiento válido.');
      return;
    }

    this.resultadoDescifrado = this.cifrarCesar(mensajeCifrado, -desplazamiento);
  }

  redirigirEscitala() {
    this.router.navigate(['/escitala']);
  }
  redirigirTarea2() {
    this.router.navigate(['/cifradouno']);
  }

  




  
}
