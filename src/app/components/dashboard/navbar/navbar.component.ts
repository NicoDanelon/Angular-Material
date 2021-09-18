import { Menu } from './../../../interfaces/menu';
import { MenuService } from './../../../services/menu.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  subscriptionMenu: Subscription = new Subscription();
  menu: Menu[] = [];

  constructor(private _menuService: MenuService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cargarMenu();
  }

  ngOnDestroy(): void {
    this.subscriptionMenu.unsubscribe();
  }

  cargarMenu(){
    this.subscriptionMenu = this._menuService.getMenu().subscribe(data =>{
      this.menu = data;
    }, error =>{
      this.error();
      console.log(error);
    })
  }

  error(){
    this.snackBar.open('No se pudo cargar el NavBar', '', {
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom'
    })
  }

}
