import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Facultad } from '../models/facultad';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacultadService {
  private apiUrl = 'http://localhost:8080/mantener/facultad';

  constructor(private http: HttpClient) {}

  getFacultadesByCampus(campusId: number): Observable<Facultad[]> {
    return this.http.get<Facultad[]>(`${this.apiUrl}/campus/${campusId}`);
  }

  getFacultades(): Observable<Facultad[]> {
    return this.http.get<Facultad[]>(this.apiUrl);
  }

  getFacultadById(id: number): Observable<Facultad> {
    return this.http.get<Facultad>(`${this.apiUrl}/${id}`);
  }

  createFacultad(facultad: Facultad): Observable<Facultad> {
    return this.http.post<Facultad>(this.apiUrl, {
      nombre: facultad.nombre,
      idCampus: facultad.idCampus
    });
  }

  updateFacultad(id: number, facultad: Facultad): Observable<Facultad> {
    return this.http.put<Facultad>(`${this.apiUrl}/${id}`, {
      nombre: facultad.nombre,
      idCampus: facultad.idCampus
    });
  }

  deleteFacultad(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
