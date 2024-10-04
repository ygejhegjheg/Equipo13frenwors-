import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cifradodos',
  templateUrl: './cifradodos.component.html',
  styleUrls: ['./cifradodos.component.css']
})
export class CifradodosComponent {
  nombre: string = '';
  domicilio: string = '';
  textoCifradoNombre: string = '';
  textoCifradoDomicilio: string = '';
  textoDescifrado: string = '';
  textoCifradoParaDescifrar: string = '';

  // Aquí puedes ajustar los valores de n, e y d según necesites
  private n: number = 3233; // Producto de dos primos grandes
  private e: number = 17;   // Exponente público
  private d: number = 2753;  // Clave privada (por simplicidad, es necesario para el descifrado)

  constructor(private router: Router) {}

  // Función para aplicar el cifrado LUC
  cifrarDatos() {
    this.textoCifradoNombre = this.cifrar(this.nombre);
    this.textoCifradoDomicilio = this.cifrar(this.domicilio);
  }

  cifrar(mensaje: string): string {
    let resultado = '';
    for (let i = 0; i < mensaje.length; i++) {
      const charCode = mensaje.charCodeAt(i);
      // Cálculo: (charCode^e) % n
      const cifrado = this.modularExponentiation(charCode, this.e, this.n);
      resultado += cifrado.toString() + ' ';
    }
    return resultado.trim();
  }

  descifrarDatos() {
    this.textoDescifrado = this.descifrar(this.textoCifradoParaDescifrar);
  }

  descifrar(mensaje: string): string {
    let resultado = '';
    const valores = mensaje.split(' ');

    for (let i = 0; i < valores.length; i++) {
      const valor = parseInt(valores[i], 10);
      // Para descifrar, usamos d (la clave privada).
      const descifrado = this.modularExponentiation(valor, this.d, this.n);
      resultado += String.fromCharCode(descifrado);
    }

    return resultado;
  }

  // Método de exponenciación modular para evitar overflow
  modularExponentiation(base: number, exponent: number, modulus: number): number {
    let result = 1;
    base = base % modulus; 
    while (exponent > 0) {
      // Si exponent es impar, multiplicar base por el resultado
      if (exponent % 2 === 1) {
        result = (result * base) % modulus;
      }
      exponent = Math.floor(exponent / 2); // Divide el exponente por 2
      base = (base * base) % modulus; // Eleva la base al cuadrado
    }
    return result;
  }

  // Método para redirigir al componente 'Cifradouno'
  regresar() {
    this.router.navigate(['/cifradouno']);
  }
}
