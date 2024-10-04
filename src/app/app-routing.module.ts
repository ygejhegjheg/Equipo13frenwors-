import { ExplicaciondosComponent } from './explicaciondos/explicaciondos.component';
import { ExplicacionComponent } from './explicacion/explicacion.component';
import { CifradotresComponent } from './cifradotres/cifradotres.component';
import { CifradodosComponent } from './cifradodos/cifradodos.component';
import { CifradounoComponent } from './cifradouno/cifradouno.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CifradosComponent } from './cifrados/cifrados.component';
import { EscitalaComponent } from './escitala/escitala.component';

 


const routes: Routes = [
  { path: '', redirectTo: '/cifrados', pathMatch: 'full' },
  { path: 'cifrados', component: CifradosComponent },
  { path: 'escitala', component: EscitalaComponent },
  { path: 'cifradodos', component: CifradodosComponent },
  { path: 'cifradotres', component: CifradotresComponent },
  { path: 'explicacion', component: ExplicacionComponent },
  { path: 'explicaciondos', component: ExplicaciondosComponent },
  { path: 'cifradouno', component: CifradounoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
