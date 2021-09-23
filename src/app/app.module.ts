import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './store/app.reducers';
import { environment } from 'src/environments/environment';
// Effects
import { EffectsModule } from '@ngrx/effects';
import { EffectsArray } from './store/effects/index';

// Routas
import { AppRoutingModule } from './app-routing.module';

// Modulos personalizados
import { SharedModule } from './shared/shared.module';
import { UsuariosModule } from './usuarios/usuarios.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    UsuariosModule,
    HttpClientModule,
    StoreModule.forRoot( appReducers ),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    EffectsModule.forRoot(EffectsArray)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
