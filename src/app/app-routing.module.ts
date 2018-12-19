import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from "./contacto/contacto.component";
import { NumeroComponent } from "./numero/numero.component";
const routes: Routes = [
  {path: '', component: ContactoComponent},
  {path: 'numero', component: NumeroComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
