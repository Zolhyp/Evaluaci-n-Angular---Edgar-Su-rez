//Importar los módulos del router de ángular
import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar componentes que vamos a Routear
import { TablaComponent } from './components/tabla/tabla.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { EditarComponent } from './components/editar/editar.component';
import { ErrorComponent } from './components/error/error.component';

//Array de rutas
const appRoutes: Routes =[
    {path: '', component: TablaComponent},
    {path: 'home', component: TablaComponent},
    {path: 'agregar', component: AgregarComponent},
    {path: 'editar', component: EditarComponent},
    {path: '**', component: ErrorComponent}
];


//Exportar el módulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes);