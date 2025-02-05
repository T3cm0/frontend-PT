import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [ApiService], // Agrega ApiService como proveedor aquí
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent {
  user = {
    nombre: '',
    correo: '',
    rol: '',
  };
  message = '';

  constructor(private apiService: ApiService) {}

  async onSubmit() {
    try {
      const response = await this.apiService.crearUsuario(this.user);
      this.message = 'Usuario creado exitosamente.';
      console.log('Respuesta del backend:', response);
    } catch (error: any) {
      this.message = 'Hubo un error al crear el usuario.';
      console.error('Error:', error);
    }
  }
}
