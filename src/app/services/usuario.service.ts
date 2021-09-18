import { Usuario } from './../interfaces/usuario';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {usuario: 'Nico Danelon', nombre: 'Nicolas', apellido: 'Danelon', fc: 'Masculino'},
    {usuario: 'Leo', nombre: 'Leonardo', apellido: 'Sarzo', fc: 'Masculino'},
    {usuario: 'Jesi', nombre: 'Jesica', apellido: 'Ni idea', fc: 'Femenino'},
    {usuario: 'Gise', nombre: 'Gisela', apellido: 'Ni idea', fc: 'Femenino'},
    {usuario: 'Guido', nombre: 'Guido', apellido: 'Telesco Czerweny', fc: 'Masculino'},
    {usuario: 'Franco Samuel', nombre: 'Franco Samuel', apellido: 'Chianessi', fc: 'Masculino'},
    {usuario: 'Gabriel Angel', nombre: 'Gabriel Angel', apellido: 'Catarinacci', fc: 'Masculino'},
    {usuario: 'Negro', nombre: 'Juan', apellido: 'Sadobe', fc: 'Masculino'},
    {usuario: 'Leo Arias', nombre: 'Leonardo', apellido: 'Arias', fc: 'Masculino'},
    {usuario: 'Naty', nombre: 'Naty', apellido: 'Ni idea', fc: 'Femenino'},
    {usuario: 'Nani', nombre: 'Ignacio', apellido: 'Sadobe', fc: 'Masculino'},
    {usuario: 'Nacho', nombre: 'Ignacio', apellido: 'Lauria', fc: 'Masculino'},
    {usuario: 'Flor', nombre: 'Flor', apellido: 'Ni idea', fc: 'Femenino'}
  ];

  constructor() { }

  getUsuario(){
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number){
    this.listUsuarios.splice(index,1);
  }

  agregarUsuario(usuario: Usuario){
    this.listUsuarios.unshift(usuario);
  }

}
