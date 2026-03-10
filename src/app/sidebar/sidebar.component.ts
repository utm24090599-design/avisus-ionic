import { Component, OnInit } from '@angular/core';
import { IonContent, IonMenu, IonTitle, IonHeader, IonToolbar, IonItem, IonList } from "@ionic/angular/standalone";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [IonContent, IonMenu, IonTitle, IonHeader, IonToolbar, IonItem, IonList],
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
