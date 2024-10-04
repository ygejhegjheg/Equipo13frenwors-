import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Importa el Router

@Component({
  selector: 'app-explicacion',
  templateUrl: './explicacion.component.html',
  styleUrl: './explicacion.component.css'
})
export class ExplicacionComponent {
  constructor(private router: Router) {}

  regresar() {
    this.router.navigate(['/cifradouno']);
  }
}
