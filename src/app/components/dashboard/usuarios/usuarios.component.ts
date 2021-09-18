import { UsuarioService } from './../../../services/usuario.service';
import { Usuario } from './../../../interfaces/usuario';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  listUsuarios: Usuario[] = [];
  dataSource!: MatTableDataSource<any>;

  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'fc', 'acciones'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _usuarioService: UsuarioService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(): void{
    this.listUsuarios = this._usuarioService.getUsuario();
    this.dataSource = new MatTableDataSource(this.listUsuarios);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarUsuario(index: number): void{
    this._usuarioService.eliminarUsuario(index);
    this.cargarUsuarios();

    this.snackBar.open('El usuario fue eliminado con exito', '', {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom'
    })
  }

}
