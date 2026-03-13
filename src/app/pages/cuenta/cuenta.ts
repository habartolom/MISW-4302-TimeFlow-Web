import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cuenta',
  imports: [FormsModule, MatButtonModule],
  templateUrl: './cuenta.html',
  styleUrl: './cuenta.css',
})
export class Cuenta {
  private router = inject(Router);
  nombre = 'Andrés';
  apellido = 'Martínez';
  correo = 'andres@email.com';
  telefono = '+57 300 123 4567';
  password = '••••••';
  zonaHoraria = 'UTC-5 (Bogotá)';
  plan = 'Plan Pro';
  initials = 'AM';

  logout() {
    this.router.navigate(['/login']);
  }
}
