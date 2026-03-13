import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css'
})
export class MainLayout {
  navGroups = [
    {
      group: 'PRINCIPAL',
      items: [
        { label: 'Dashboard', route: '/dashboard', icon: 'dashboard' },
        { label: 'Historial', route: '/historial', icon: 'history' },
        { label: 'Asignar Tiempo', route: '/asignar-tiempo', icon: 'timer' },
        { label: 'Alertas', route: '/alertas', icon: 'notifications' },
        { label: 'Plantillas', route: '/plantillas', icon: 'description' },
      ]
    },
    {
      group: 'ANÁLISIS',
      items: [
        { label: 'Gráficos', route: '/graficos', icon: 'bar_chart' },
        { label: 'Exportar', route: '/exportar', icon: 'file_download' },
        { label: 'Insights', route: '/insights', icon: 'lightbulb' },
        { label: 'Metas', route: '/metas', icon: 'flag' },
        { label: 'Por Tipo', route: '/por-tipo', icon: 'category' },
      ]
    },
    {
      group: 'AVANZADO',
      items: [
        { label: 'Integraciones', route: '/integraciones', icon: 'extension' },
        { label: 'API', route: '/api', icon: 'code' },
        { label: 'Equipo', route: '/equipo', icon: 'group' },
      ]
    },
    {
      group: 'CUENTA',
      items: [
        { label: 'Mi Cuenta', route: '/cuenta', icon: 'person' },
      ]
    }
  ];
}
