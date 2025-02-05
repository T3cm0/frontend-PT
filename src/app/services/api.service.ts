import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root', // Alternativa si quieres registrarlo globalmente
})
export class ApiService {
  private baseUrl = 'http://127.0.0.1:8000/api/usuarios';

  async crearUsuario(user: { nombre: string; correo: string; rol: string }) {
    try {
      const response = await axios.post(`${this.baseUrl}/crear`, user);
      return response.data;
    } catch (error: any) {
      throw error.response?.data || 'Error en la solicitud';
    }
  }
}
