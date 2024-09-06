import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,IonThumbnail, IonMenuButton, IonHeader, IonTitle, IonToolbar, IonButtons, IonList, IonItem, IonInput, IonToggle, IonLabel, IonNote, IonButton, IonItemSliding, IonItemOptions, IonItemOption, IonAvatar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonProgressBar, IonCardContent } from '@ionic/angular/standalone';
import { addIcons } from "ionicons";
import { RouterLink,RouterLinkActive } from '@angular/router';
import { MoviesManagerService } from 'src/app/service/movies-manager.service';
import { Movie } from 'src/app/interface/movie';

@Component({
  selector: 'app-milista',
  templateUrl: './milista.page.html',
  styleUrls: ['./milista.page.scss'],
  standalone: true,
  imports: [IonCardContent,IonThumbnail,RouterLink,RouterLinkActive, IonProgressBar, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonAvatar, IonItemOption, IonItemOptions, IonItemSliding, IonButton, IonNote, IonLabel, IonToggle, IonInput, IonItem, IonList, IonButtons, IonMenuButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MilistaPage implements OnInit {
  tituloBuscado: string = "";
  peliculas: Movie[];
  peliculasFiltradas: Movie[];
  cargando: boolean = false;


  constructor(protected servicio: MoviesManagerService) {
    this.peliculas = this.servicio.getPeliculas();
    this.peliculasFiltradas = this.peliculas;
    servicio.setBuscar(this.peliculasFiltradas);
  }

  buscar() {
    this.peliculasFiltradas = this.peliculas.filter(peli => peli.Title.toLowerCase().includes(this.tituloBuscado.toLocaleLowerCase()));
    console.log(this.tituloBuscado);
    this.servicio.setBuscar(this.peliculasFiltradas);
  }


  estaCargando() {
    this.cargando = !this.cargando;
  }


  ngOnInit() {
  }

}
