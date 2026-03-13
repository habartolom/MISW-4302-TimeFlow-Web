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
        { label: 'Dashboard',      route: '/dashboard' },
        { label: 'Historial',      route: '/historial' },
        { label: 'Asignar Tiempo', route: '/asignar-tiempo' },
        { label: 'Alertas',        route: '/alertas' },
        { label: 'Plantillas',     route: null },
      ]
    },
    {
      group: 'ANÁLISIS',
      items: [
        { label: 'Gráficos',      route: null },
        { label: 'Exportar',      route: null },
        { label: 'Insights',      route: null },
        { label: 'Metas',         route: null },
        { label: 'Por Tipo',      route: null },
      ]
    },
    {
      group: 'AVANZADO',
      items: [
        { label: 'Integraciones', route: null },
        { label: 'API',           route: null },
        { label: 'Equipo',        route: null },
      ]
    },
    {
      group: 'CUENTA',
      items: [
        { label: 'Mi Cuenta', route: '/cuenta' },
      ]
    }
  ];
}
