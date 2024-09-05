import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonThumbnail, IonMenuButton, IonHeader, IonTitle, IonToolbar, IonButtons, IonList, IonItem, IonButton, IonItemSliding, IonItemOption, IonItemOptions, IonAvatar, IonLabel, IonInput, IonProgressBar, IonToast, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';
import { addIcons } from "ionicons";
import { Movie } from 'src/app/interface/movie';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MoviesManagerService } from 'src/app/service/movies-manager.service';
import { HttpomdbService } from 'src/app/service/httpomd/httpomdb.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonThumbnail, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonToast, RouterLinkActive, RouterLink, IonProgressBar, IonInput, IonLabel, IonAvatar, IonItemOptions, IonItemOption, IonItemSliding, IonButton, IonItem, IonList, IonButtons, IonMenuButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class BuscarPage {
  public tituloPelicula: string = "";
  isGuardado: boolean = false;
  mensajeToast: string = '';
  peliculas: Movie[] = [];
  cargando: boolean = false;


  constructor(private servicio: HttpomdbService, private movieService: MoviesManagerService) { }

  agregar(id: number) {
    this.setToast();
    this.mensajeToast = 'Se ha guardado a Mi lista "' + this.peliculas[id].Title + '"';
    this.movieService.setPelicula(this.peliculas[id]);
  }
  buscar() {
    this.estaCargando();
    console.log("Buscando .." + this.tituloPelicula);
    this.servicio.getMovie(this.tituloPelicula).subscribe(data => {
      if (data.Response === 'False') {
        console.error("DAto no encontrado");
      } else {
        this.estaCargando();
        console.log(data.Search);
        this.peliculas = data.Search;
        console.log(this.peliculas);
        this.movieService.setBuscar(this.peliculas);
        this.tituloPelicula = '';


      }
    })
  }
  estaCargando() {
    this.cargando = !this.cargando;
  }

  setToast() {
    this.isGuardado = !this.isGuardado;
  }

}
