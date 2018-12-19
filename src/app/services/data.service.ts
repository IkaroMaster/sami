import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contacto, Numero } from '../model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  obtenerContactos(): Observable<Contacto[]>
  {
    return this.http.get<Contacto[]>('http://127.0.0.1:8000/api/contactos/');
  }

  guardarContacto(cli: Contacto): Observable<Contacto>
  {
    return this.http.post<Contacto>(`http://127.0.0.1:8000/api/contactos/`, cli, httpOptions);
  }
  
}
