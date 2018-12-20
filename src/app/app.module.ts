import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import{FormsModule} from '@angular/forms';
import { BrowserXhr } from '@angular/http';

import {routes} from './routes';
import { AppComponent } from './app.component';
import { AltaArtComponent } from './Components/alta-art/alta-art.component';
import { BajaArtComponent } from './Components/baja-art/baja-art.component';
import { ModifArtComponent } from './Components/modif-art/modif-art.component';
import { AltaRubroComponent } from './Components/alta-rubro/alta-rubro.component';
import { BajaRubroComponent } from './Components/baja-rubro/baja-rubro.component';
import { ModifRubroComponent } from './Components/modif-rubro/modif-rubro.component';
import { AltaProveedComponent } from './Components/alta-proveed/alta-proveed.component';
import { BajaProveedComponent } from './Components/baja-proveed/baja-proveed.component';
import { ModifProveedComponent } from './Components/modif-proveed/modif-proveed.component';
import { AltaClientComponent } from './Components/alta-client/alta-client.component';
import { BajaClientComponent } from './Components/baja-client/baja-client.component';
import { ModifClientComponent } from './Components/modif-client/modif-client.component';
import { ListArticulosComponent } from './Components/list-articulos/list-articulos.component';
import { ListProvComponent } from './Components/list-prov/list-prov.component';
import { ListClientComponent } from './Components/list-client/list-client.component';
import { AltaFacturaComponent } from './Components/alta-factura/alta-factura.component';
import { HomeComponent } from './Components/home/home.component';
import { ArticuloService } from './Services/articulo.service';
import { ClienteService } from './Services/cliente.service';
import { FacturaService } from './Services/factura.service';
import { ProveedorService } from './Services/proveedor.service';
import { ListFacturasComponent } from './Components/list-facturas/list-facturas.component';
import { AltaFacturasIngComponent } from './Components/alta-facturas-ing/alta-facturas-ing.component';

@NgModule({
  declarations: [
    AppComponent,
    AltaArtComponent,
    BajaArtComponent,
    ModifArtComponent,
    AltaRubroComponent,
    BajaRubroComponent,
    ModifRubroComponent,
    AltaProveedComponent,
    BajaProveedComponent,
    ModifProveedComponent,
    AltaClientComponent,
    BajaClientComponent,
    ModifClientComponent,
    ListArticulosComponent,
    ListProvComponent,
    ListClientComponent,
    AltaFacturaComponent,
    HomeComponent,
    ListFacturasComponent,
    AltaFacturasIngComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [{provide: BrowserXhr},ArticuloService,ClienteService,FacturaService,ProveedorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
