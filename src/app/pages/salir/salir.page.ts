import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { App } from '@capacitor/app';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-salir',
  templateUrl: './salir.page.html',
  styleUrls: ['./salir.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SalirPage implements OnInit {

  constructor() { }

  salirApp(){
    App.exitApp();
  }

  ngOnInit() {
    this.salirApp();
  }

}
