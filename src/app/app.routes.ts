import { Routes } from '@angular/router';
import { Layout } from './components/layout/layout';
import { authGuard } from './guard/guard';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login').then(m => m.LoginComponent)
    },
    {
        path: '',
        component: Layout,
        canActivate: [authGuard],
        children: [
            {
                path: 'usuarios',
                loadComponent: () => import('./pages/usuarios/usuarios').then(m => m.UsuariosComponent)
            },
            {
                path: 'roles',
                loadComponent: () => import('./pages/roles/roles').then(m => m.RolesComponent)
            },
            {
                path: '',
                redirectTo: 'usuarios',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: 'inicio',
        loadComponent: () => import('./pages/pagina/pagina').then(m => m.InicioComponent)
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];