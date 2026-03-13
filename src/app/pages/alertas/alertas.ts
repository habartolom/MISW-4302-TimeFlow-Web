import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-alertas',
  imports: [FormsModule, MatButtonModule],
  templateUrl: './alertas.html',
  styleUrl: './alertas.css',
})
export class Alertas {
  toggles = [
    { label: 'Alerta al 80% del tiempo',          enabled: true },
    { label: 'Alerta al 100% del tiempo',          enabled: true },
    { label: 'Vibración al cambio de sección',     enabled: true },
    { label: 'Alerta a 1 minuto del final',        enabled: false },
    { label: 'Sonido de alerta',                   enabled: false },
    { label: 'Notificación push de recordatorio',  enabled: true },
  ];

  tipoAlerta = 'vibracion';
  tipoOpciones = [
    { value: 'vibracion', label: 'Vibración' },
    { value: 'sonido',    label: 'Sonido' },
    { value: 'ambos',     label: 'Ambos' },
  ];
}
