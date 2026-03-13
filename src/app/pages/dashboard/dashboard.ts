import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  stats = [
    { label: 'Total Sesiones', value: '47' },
    { label: 'Prom. Duración', value: '14:32 min' },
    { label: 'Porcentaje a tiempo', value: '78%' },
    { label: 'Mejor racha', value: '8 a tiempo' },
  ];

  recentSessions = [
    { name: 'Q4 Sales Review', time: '15:32', status: 'Exc.' },
    { name: 'Team Standup', time: '12:03', status: 'OK' },
    { name: 'Sprint Review', time: '18:45', status: 'Exc.' },
    { name: 'Client Demo', time: '9:58', status: 'OK' },
  ];

  monthlyComparison = [
    { month: 'Ene', pct: 82, label: '82% a tiempo' },
    { month: 'Feb', pct: 78, label: '78% a tiempo' },
  ];
}
