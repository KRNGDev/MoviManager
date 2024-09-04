import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonMenuButton, IonHeader, IonTitle, IonToolbar, IonButtons, IonList, IonItem, IonButton, IonItemSliding, IonItemOption, IonItemOptions, IonAvatar, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from "ionicons";
import { Movie } from 'src/app/interface/movie';
import { MoviesManagerService } from 'src/app/service/movies-manager.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
  standalone: true,
  imports: [IonLabel, IonAvatar, IonItemOptions, IonItemOption, IonItemSliding, IonButton, IonItem, IonList, IonButtons, IonMenuButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class BuscarPage implements OnInit {
  public tituloPelicula: string = "";
  peliculas: Movie[] = [];


  constructor(servicio: MoviesManagerService) { }

  agregar() {

  }
  buscar() {

  }
  ngOnInit() {
  }

}
