import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton } from '@ionic/angular/standalone';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonButtons, CommonModule, DashboardComponent, SidebarComponent, IonHeader, IonToolbar, IonTitle, IonMenuButton, IonContent],
})
export class HomePage {
  constructor() { }
}
