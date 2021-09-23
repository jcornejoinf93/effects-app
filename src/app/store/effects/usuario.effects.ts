import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import * as usuariosActions from '../actions';
import { UsuarioService } from '../../services/usuario.service';
import { of } from 'rxjs';

@Injectable()
export class UsuarioEffects {

  constructor(private actions$: Actions,
              private usuariosService: UsuarioService ) {}

  cargarUsuario$ = createEffect(
    () => this.actions$.pipe(
      ofType( usuariosActions.cargarUsuario ),
      mergeMap(
        (action) => this.usuariosService.getUserById(action.id)
              .pipe(
                map( usuario => usuariosActions.cargarUsuarioSuccess({usuario}) ),
                catchError( error => of( usuariosActions.cargarUsuarioError({ payload: error }) ))
              )
       )
    )
  );
}
