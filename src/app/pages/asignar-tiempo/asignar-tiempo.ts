import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

interface Seccion {
  nombre: string;
  minutos: number;
  segundos: number;
}

@Component({
  selector: 'app-asignar-tiempo',
  imports: [FormsModule, MatButtonModule],
  templateUrl: './asignar-tiempo.html',
  styleUrl: './asignar-tiempo.css',
})
export class AsignarTiempo {
  presentacion = '';

  secciones: Seccion[] = [
    { nombre: 'Introducción', minutos: 3, segundos: 0 },
    { nombre: 'Resultados',   minutos: 5, segundos: 0 },
    { nombre: 'Análisis',     minutos: 4, segundos: 0 },
    { nombre: 'Q&A',          minutos: 2, segundos: 0 },
    { nombre: 'Buffer',       minutos: 1, segundos: 0 },
  ];

  get totalMinutos(): number {
    return this.secciones.reduce((sum, s) => sum + s.minutos + s.segundos / 60, 0);
  }

  get totalFormateado(): string {
    const m = Math.floor(this.totalMinutos);
    const s = Math.round((this.totalMinutos - m) * 60);
    return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  }

  get progressPct(): number {
    return Math.min(100, (this.totalMinutos / 15) * 100);
  }
}
