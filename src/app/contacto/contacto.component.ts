import { Component, OnInit } from '@angular/core';
import { Contacto } from '../model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(private ds: DataService) { }
  contactos : Contacto[];
  contacto : Contacto;
  ngOnInit() {
    this.obtenerContactos();
  }

  obtenerContactos()
  {
    this.ds.obtenerContactos().subscribe(lista => this.contactos = lista);
  }

  guardarContacto (nombre:string,apellido:string,direccion:string)
  {
    this.contacto = new Contacto(0,nombre,apellido,direccion);

      this.ds.guardarContacto(this.contacto).subscribe(c => {
        this.contactos.push(c);
      });
    alert('Cliente guardado!');
  }

}
