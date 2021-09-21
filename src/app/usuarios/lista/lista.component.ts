import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario.models';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor( private usuarioService: UsuarioService ) { }

  ngOnInit(): void {
    this.usuarioService.getUsers().subscribe( users => {
      this.usuarios = users;
    });
  }

}
