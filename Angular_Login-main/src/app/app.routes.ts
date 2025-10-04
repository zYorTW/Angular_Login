import { Routes } from '@angular/router';
import { Layout } from './components/layout/layout'; // Importamos el layout
import { authGuard } from './guard/guard';

export const routes: Routes = [
    // Ruta pública para iniciar sesión
    {
        path: 'login',
        loadComponent: () =>
            import('./pages/login/login').then(m => m.LoginComponent) // Carga standalone del login
    },

    {
        path: '', // Ruta raiz
        component: Layout, // Todas las paginas estaran dentro del component layout
        canActivate: [authGuard], // Protegemos las rutas hijas con el guard
        children: [ // Se definen las rutas hijas
            //
            {
                path: 'usuarios',
                loadComponent: () =>
                    import('./pages/usuarios/usuarios').then(m => m.UsuariosComponent) // Método standalone para cargas los components
            },
            // 
            {
                path: 'roles',
                loadComponent: () =>
                    import('./pages/roles/roles').then(m => m.RolesComponent) // Método standalone para cargar los componentes dinámicamente
            },


            // Si la ruta es vacía lo redirige a usuarios y debe ser la ruta exacta sino da error
            { path: '', redirectTo: 'usuarios', pathMatch: 'full' }
        ]

    }
];