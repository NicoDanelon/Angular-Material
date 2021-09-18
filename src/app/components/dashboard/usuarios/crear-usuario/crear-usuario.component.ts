import { UsuarioService } from './../../../../services/usuario.service';
import { Usuario } from './../../../../interfaces/usuario';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private _usuarioService: UsuarioService,
              private router: Router,
              private snackBar: MatSnackBar) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fechaNacimiento: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  agregarUsuario(): void{
    const user: Usuario = {
      usuario: this.form.value.usuario,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      fc: this.form.value.fc
    }

    this._usuarioService.agregarUsuario(user);
    this.router.navigate(['/dashboard/usuarios']);

    this.snackBar.open('Usuario Registrado', '', {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom'
    })
  }
}
