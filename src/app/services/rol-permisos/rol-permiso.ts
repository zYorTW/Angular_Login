import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RolPermisoService {
  private apiUrl = 'http://localhost:3000/api/rol-permiso';

  constructor(private http: HttpClient) {}

  obtenerRolPermisos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  
  obtenerRolPermisoPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  asignarPermiso(rol: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, rol);
  }
  actualizarRolPermiso(id: number, rol: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, rol);
  }

  eliminarRolPermiso(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
