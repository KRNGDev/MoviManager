import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonThumbnail, IonMenuButton, IonHeader, IonTitle, IonToolbar, IonButtons, IonList, IonItem, IonButton, IonItemSliding, IonItemOption, IonItemOptions, IonAvatar, IonLabel, IonInput, IonProgressBar, IonToast, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonAlert, IonSearchbar, IonIcon } from '@ionic/angular/standalone';
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
  imports: [IonIcon, IonSearchbar, IonAlert, IonCardContent, IonThumbnail, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonToast, RouterLinkActive, RouterLink, IonProgressBar, IonInput, IonLabel, IonAvatar, IonItemOptions, IonItemOption, IonItemSliding, IonButton, IonItem, IonList, IonButtons, IonMenuButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class BuscarPage {
  public tituloPelicula: string = "";
  isGuardado: boolean = false;
  isAlertOpen: boolean = false;
  isAlertError: boolean = false;
  mensajeToast: string = '';
  mensajeAlerta: string = '';
  peliculas: Movie[] = [];
  cargando: boolean = false;


  constructor(private servicio: HttpomdbService, private movieService: MoviesManagerService, private alertController: AlertController) { }

  async agregar(id: number) {
    try {
      this.movieService.setPelicula(this.peliculas[id]);
      this.mensajeToast = 'Se ha guardado a Mi lista "' + this.peliculas[id].Title + '"';
      this.setToast();
    } catch (e) {
      console.log(e)
      const alert = await this.alertController.create({
        header: 'Ya Esta Guardada',
        message: 'La pelicula "' + this.peliculas[id].Title + '" ¡¡Ya esta Guardado en tu lista!!'

      });
      await alert.present();

    }


  }



  buscar() {
    this.estaCargando();

    this.servicio.getMovie(this.tituloPelicula).subscribe(data => {
      if (data.Response === 'False') {

        this.estaCargando();
        this.mensajeAlerta = "No se ha encontrado ninguna pelicula con la busqueda : '" + this.tituloPelicula + "'.";
        this.setErrorOpen(true);
      } else {
        this.estaCargando();
        this.peliculas = data.Search;
        this.movieService.setBuscar(this.peliculas);
        this.tituloPelicula = '';


      }
    })
  }


  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
  setErrorOpen(isOpen: boolean) {
    this.isAlertError = isOpen;
  }
  estaCargando() {
    this.cargando = !this.cargando;
  }

  setToast() {
    this.isGuardado = !this.isGuardado;
  }

}
