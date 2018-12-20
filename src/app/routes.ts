import {Routes} from '@angular/router';
import { AltaArtComponent } from './Components/alta-art/alta-art.component';
import { BajaArtComponent } from './Components/baja-art/baja-art.component';
import { ModifArtComponent } from './Components/modif-art/modif-art.component';

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
import { AltaFacturasIngComponent } from './Components/alta-facturas-ing/alta-facturas-ing.component';
import { ListFacturasComponent } from './Components/list-facturas/list-facturas.component';
import { HomeComponent } from './Components/home/home.component';



export const routes:Routes=[
    {path:'AltaArt',component:AltaArtComponent},
    {path:'AltaCli',component:AltaClientComponent},
    {path:'AltaProv',component: AltaProveedComponent},
    {path:'AltaFac',component:AltaFacturaComponent},
    {path:'AltaFacIng',component:AltaFacturasIngComponent},
    {path:'BajaArt',component:BajaArtComponent},
    {path:'BajaCli',component:BajaClientComponent},
    {path:'BajaProv',component:BajaProveedComponent},
    {path:'ModifArt',component:ModifArtComponent},
    {path:'ListFac',component:ListFacturasComponent},
    {path:'ModifCli',component:ModifClientComponent},
    {path:'ModifProv',component:ModifProveedComponent},
    {path:'ListArt',component:ListArticulosComponent},
    {path:'ListCli',component:ListClientComponent},
    {path:'ListProv',component:ListProvComponent},
    {path:'Home',component:HomeComponent},
    {path:'**',redirectTo:'Home'}
    

    /*{path:'logIn',component:LoginUserComponent },
     {path:'ListaPeliculas',component:ListarPeliculasComponent},
     {path:'registerMovie',component:AltaPeliculaComponent},
     {path:'deleteMovie',component:BajaPeliculaComponent},
     {path:'modifMovie',component:ModifPeliculaComponent},
     {path:'registerUser',component:AltaUserComponent},
     {path:'deleteUser',component:BajaUserComponent},
     {path:'modifUser',component:ModifUserComponent},
     {path:'ListaUser',component:ListarUsuariosComponent},
     {path:'detailMovie',component:DetallePeliculaComponent},
     {path:'histUser',component:HistorialUsuarioComponent},
     {path:'topMovie',component:TopPeliculasComponent},
    // {path:'editarTarea/:id',component:FormTareaComponent},
    // {path:'',redirectTo:'tareas',pathMatch:'full'},
     */

]