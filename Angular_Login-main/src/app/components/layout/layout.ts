import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auths/auth';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  // CommonModule para usar directivas comunes como *ngIf, *ngFor, etc.
  // RouterModule para usar directivas de enrutamiento como routerlink
  templateUrl: './layout.html',
  styleUrls: ['./layout.css']
})
export class layout {
  usuario: any;

  // Se inyecta el servicio Authservices y router
  constructor(private auth: AuthService, private router: Router){
    this.usuario= this.auth.obtenerUsuario(); // Obtiene el usuario guardado en localStorage
  }

  cerrarSesion() {
    this.auth.cerrarSesion();
    this.router.navigate(['/login']);
  }
}