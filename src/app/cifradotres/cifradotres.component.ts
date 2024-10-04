import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js'; // Usar CryptoJS para SHA-1
import { Router } from '@angular/router'; // Importar Router

@Component({
  selector: 'app-cifradotres',
  templateUrl: './cifradotres.component.html',
  styleUrls: ['./cifradotres.component.css']
})
export class CifradotresComponent {
  nombre: string = '';
  domicilio: string = '';
  textoCifradoNombre: string = '';
  textoCifradoDomicilio: string = '';

  constructor(private router: Router) {} // Inyectar Router en el constructor

  // Función para aplicar el cifrado SHA-1
  cifrarDatos() {
    this.textoCifradoNombre = CryptoJS.SHA1(this.nombre).toString();
    this.textoCifradoDomicilio = CryptoJS.SHA1(this.domicilio).toString();
  }

  regresar() {
    this.router.navigate(['/cifradouno']);  // Redirigir al componente 'cifradouno'
  }
}
