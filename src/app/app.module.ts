import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule
import { CifradosComponent } from './cifrados/cifrados.component';
import { EscitalaComponent } from './escitala/escitala.component';
import { CifradounoComponent } from './cifradouno/cifradouno.component';
import { CifradodosComponent } from './cifradodos/cifradodos.component';
import { CifradotresComponent } from './cifradotres/cifradotres.component';
import { ExplicacionComponent } from './explicacion/explicacion.component';
import { ExplicaciondosComponent } from './explicaciondos/explicaciondos.component';


@NgModule({
  declarations: [
    AppComponent,
    CifradosComponent,
    EscitalaComponent,
    CifradounoComponent,
    CifradodosComponent,
    CifradotresComponent,
    ExplicacionComponent,
    ExplicaciondosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
