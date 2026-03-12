import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardsComponent } from "../components/cards/cards.component";

@Component({
  selector: 'app-dashboard', // IMPORTANTE: Este es el nombre para el HTML
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'], // Si usas SCSS, cambia la extensión a .scss
  imports: [CommonModule, CardsComponent]
})
export class DashboardComponent {
  // Datos basados en tu imagen
  newsItems = [
    {
      title: 'polo norte en peligro!!!',
      imageUrl: 'https://via.placeholder.com/400x200?text=Artico'
    },
    {
      title: 'Noticias Internacionales',
      imageUrl: 'https://via.placeholder.com/400x200?text=Politica'
    },
    {
      title: '¡¡¡Adictos al empeño en la universidad metropolitana!!!',
      imageUrl: 'https://via.placeholder.com/400x200?text=Pawn+Shop'
    }
  ];

  constructor() { }
}
