import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { routing, appRoutingProviders} from './app.routing';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { ErrorComponent } from './components/error/error.component';
import { FooterComponent } from './components/footer/footer.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EditarComponent } from './components/editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TablaComponent,
    AgregarComponent,
    ErrorComponent,
    FooterComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    FormsModule,
    NoopAnimationsModule,
    MatDialogModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
