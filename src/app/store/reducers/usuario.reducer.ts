import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions';
import { Usuario } from '../../models/Usuario.models';

export interface UsuarioState {
    id: string;
    user: Usuario;
    loaded: boolean;
    loading: boolean;
    error: any;
}

export const usuarioInitialState: UsuarioState = {
  id: null,
  user: null,
  loaded: false,
  loading: false,
  error: null
};

const _usuarioReducer = createReducer(usuarioInitialState,

    on( actions.cargarUsuario , (state, {id}) => ({
      ...state, loading: true,
      id
    })),
    on( actions.cargarUsuarioSuccess , (state, { usuario }) => ({
      ...state,
      loading: false,
      loaded: true,
      user: {...usuario}
    })),
    on( actions.cargarUsuarioError , (state, { payload }) => ({
      ...state,
      loading: false,
      loaded: false,
      error: {
        url: payload.url,
        name: payload.name,
        message: payload.message
      }
    })),


);

export function usuarioReducer(state, action) {
    return _usuarioReducer(state, action);
}
