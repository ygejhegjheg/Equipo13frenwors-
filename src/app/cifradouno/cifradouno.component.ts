import { Component } from '@angular/core';
import CryptoJS from 'crypto-js'; // Importar directamente
import { Router } from '@angular/router'; // Importa el Router

@Component({
  selector: 'app-cifradouno',
  templateUrl: './cifradouno.component.html',
  styleUrls: ['./cifradouno.component.css']
})
export class CifradounoComponent {
  nombre: string = '';
  domicilio: string = '';
  textoCifradoNombre: string = '';
  textoCifradoDomicilio: string = '';
  textoDescifrado: string = '';
  textoCifradoParaDescifrar: string = '';

  constructor(private router: Router) {}  // Inyectar el Router

  cifrarDatos() {
    const clave = 'mi_clave_secreta'; // Cambia esto a una clave segura
    
    // Cifrado del nombre
    this.textoCifradoNombre = CryptoJS.AES.encrypt(this.nombre, clave).toString();
    
    // Cifrado del domicilio
    this.textoCifradoDomicilio = CryptoJS.AES.encrypt(this.domicilio, clave).toString();
  }

  descifrarDatos() {
    const clave = 'mi_clave_secreta'; // Asegúrate de que sea la misma clave que usaste para cifrar
    
    // Descifrado
    const bytes = CryptoJS.AES.decrypt(this.textoCifradoParaDescifrar, clave);
    this.textoDescifrado = bytes.toString(CryptoJS.enc.Utf8);
  }

  redirigirACifradoDos() {
    this.router.navigate(['/cifradodos']);  // Redirección a la ruta de cifradodos
  }

  redirigirACifradotres() {
    this.router.navigate(['/cifradotres']);  // Redirección a la ruta de cifradodos
  }

  redirigirexplicacion() {
    this.router.navigate(['/explicacion']);  // Redirección a la ruta de cifradodos
  }
  redirigirexplicacion2() {
    this.router.navigate(['/explicaciondos']);  // Redirección a la ruta de cifradodos
  }
}

