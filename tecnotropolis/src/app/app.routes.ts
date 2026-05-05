import { Routes } from '@angular/router';
import { Contato } from './pages/contato/contato';
import { Home } from './pages/home/home';
import { Perfil } from './pages/perfil/perfil';


export const routes: Routes = [
    {path:'contato',component:Contato},
    {path:'home',component:Home},
    {path:'perfil',component:Perfil}
];
