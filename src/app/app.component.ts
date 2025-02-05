import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`, // Renderiza el contenido de las rutas aquí
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
