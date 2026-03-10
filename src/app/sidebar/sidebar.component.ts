import { Component, OnInit } from '@angular/core';
import { IonContent, IonMenu, IonTitle, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonIcon, IonItem, IonLabel, IonList, IonRouterOutlet } from "@ionic/angular/standalone";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [IonContent, IonMenu, IonTitle, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonIcon, IonItem, IonLabel, IonList, IonRouterOutlet],
})
export class SidebarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
