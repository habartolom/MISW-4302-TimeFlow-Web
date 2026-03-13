import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cuenta',
  imports: [RouterLink, FormsModule, MatButtonModule],
  templateUrl: './cuenta.html',
  styleUrl: './cuenta.css',
})
export class Cuenta {
  nombre = 'Andrés';
  apellido = 'Martínez';
  correo = 'andres@email.com';
  telefono = '+57 300 123 4567';
  password = '••••••';
  zonaHoraria = 'UTC-5 (Bogotá)';
  plan = 'Plan Pro';
  initials = 'AM';
}
