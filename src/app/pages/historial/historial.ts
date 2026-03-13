import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

interface Session {
  name: string;
  date: string;
  duration: string;
  sections: number;
  status: 'A tiempo' | 'Excedido';
}

@Component({
  selector: 'app-historial',
  imports: [FormsModule, MatButtonModule],
  templateUrl: './historial.html',
  styleUrl: './historial.css',
})
export class Historial {
  search = '';
  dateFilter = '';
  statusFilter = '';

  sessions: Session[] = [
    { name: 'Q4 Sales Review',  date: '18 Feb', duration: '15:32 / 15:00', sections: 4, status: 'Excedido' },
    { name: 'Team Standup',     date: '17 Feb', duration: '12:03 / 12:00', sections: 3, status: 'A tiempo' },
    { name: 'Sprint Review',    date: '15 Feb', duration: '18:45 / 15:00', sections: 4, status: 'Excedido' },
    { name: 'Client Demo',      date: '14 Feb', duration: '9:58 / 10:00',  sections: 3, status: 'A tiempo' },
    { name: 'Workshop UX',      date: '12 Feb', duration: '28:15 / 30:00', sections: 5, status: 'A tiempo' },
    { name: 'Board Meeting',    date: '10 Feb', duration: '44:50 / 40:00', sections: 6, status: 'Excedido' },
    { name: 'Team Retro',       date: '8 Feb',  duration: '14:22 / 15:00', sections: 4, status: 'A tiempo' },
  ];
}
