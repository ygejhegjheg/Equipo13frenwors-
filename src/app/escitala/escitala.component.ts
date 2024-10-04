import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-escitala',
  templateUrl: './escitala.component.html',
  styleUrls: ['./escitala.component.css']
})
export class EscitalaComponent {
  mensajeCifrado: string = '';
  claveCifrado: string = '';
  resultadoCifrado: string = '';
  mensajeDescifrado: string = '';
  claveDescifrado: string = '';
  resultadoDescifrado: string = '';

  constructor(private router: Router) {}

  cifrarEscitala(texto: string, clave: string): string {
    const longitudClave = parseInt(clave);
    if (isNaN(longitudClave) || longitudClave <= 0) return texto;

    const textoLimpio = texto.replace(/[^a-zA-Z0-9]/g, '');
    if (longitudClave >= textoLimpio.length) return textoLimpio;

    const filas = Math.ceil(textoLimpio.length / longitudClave);
    const textoRellenado = textoLimpio.padEnd(filas * longitudClave, ' ');
    let resultado = '';

    for (let col = 0; col < longitudClave; col++) {
      for (let fila = 0; fila < filas; fila++) {
        resultado += textoRellenado[fila * longitudClave + col];
      }
    }
    return resultado.trim();
  }

  descifrarEscitala(texto: string, clave: string): string {
    const longitudClave = parseInt(clave);
    if (isNaN(longitudClave) || longitudClave <= 0) return texto;

    const filas = Math.ceil(texto.length / longitudClave);
    let resultado = '';

    for (let fila = 0; fila < filas; fila++) {
      for (let col = 0; col < longitudClave; col++) {
        const index = fila + col * filas;
        if (index < texto.length) {
          resultado += texto[index];
        }
      }
    }
    return resultado.trim();
  }

  manejarCifrado() {
    const textoCifrado = this.cifrarEscitala(this.mensajeCifrado, this.claveCifrado);
    this.resultadoCifrado = textoCifrado;
  }

  manejarDescifrado() {
    const textoDescifrado = this.descifrarEscitala(this.mensajeDescifrado, this.claveDescifrado);
    this.resultadoDescifrado = textoDescifrado;
  }

  navigateBack() {
    this.router.navigate(['/']); // Cambia la ruta según tu configuración
  }
}
