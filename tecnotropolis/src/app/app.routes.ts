import { Routes } from '@angular/router';
import { Perfil } from './pages/perfil/perfil';
import { Contato } from './pages/contato/contato';

export const routes: Routes = [
    {path: 'perfil',component:Perfil},
     {path: 'contato',component:Contato}
];
