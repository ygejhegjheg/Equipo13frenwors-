import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-explicaciondos',
  templateUrl: './explicaciondos.component.html',
  styleUrl: './explicaciondos.component.css'
})
export class ExplicaciondosComponent {


  constructor(private router: Router) {}

  regresar() {
    this.router.navigate(['/cifradouno']);
  }
}
