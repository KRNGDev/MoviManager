import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonThumbnail, IonMenuButton, IonHeader, IonTitle, IonToolbar, IonButtons, IonList, IonItem, IonInput, IonToggle, IonLabel, IonNote, IonButton, IonItemSliding, IonItemOptions, IonItemOption, IonAvatar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonProgressBar, IonCardContent, IonAlert, IonSearchbar, IonSegment, IonSegmentButton, IonFooter, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from "ionicons";
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MoviesManagerService } from 'src/app/service/movies-manager.service';
import { Movie } from 'src/app/interface/movie';
import { heart, heartSharp, heartOutline } from 'ionicons/icons';

@Component({
  selector: 'app-milista',
  templateUrl: './milista.page.html',
  styleUrls: ['./milista.page.scss'],
  standalone: true,
  imports: [IonIcon, IonFooter, IonSegmentButton, IonSegment, IonSearchbar, IonAlert, IonCardContent, IonThumbnail, RouterLink, RouterLinkActive, IonProgressBar, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonAvatar, IonItemOption, IonItemOptions, IonItemSliding, IonButton, IonNote, IonLabel, IonToggle, IonInput, IonItem, IonList, IonButtons, IonMenuButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MilistaPage implements OnInit {
  tituloBuscado: string = "";
  peliculas: Movie[];
  peliculasFiltradas: Movie[];
  cargando: boolean = false;
  favoritos: boolean = false;




  constructor(protected servicio: MoviesManagerService, private alertController: AlertController) {
    this.peliculas = this.servicio.getPeliculas();
    this.peliculasFiltradas = this.peliculas;
    servicio.setBuscar(this.peliculasFiltradas);
  }


  cambioSegmento(evento: any) {
    const tipoEvento = evento.detail.value;
    console.log('Segment changed', tipoEvento);

    this.mostrarPeliSeleccionada(tipoEvento);
  }
  

  mostrarPeliSeleccionada(evento: any) {

    if (evento === 'favorites') {
      this.favoritos = true;

      this.peliculasFiltradas = this.peliculas.filter(peli => peli.fav === true);

    } else {
      this.favoritos = false;
      this.peliculasFiltradas = this.peliculas
    }
  }



  public alertButtons = (peli: Movie) => [
    {
      text: 'Cancelar',
      role: 'cancel',
      handler: () => {

      },
    },
    {
      text: 'Borrar',
      role: 'confirm',
      handler: () => {

        this.borrar(peli);

      },
    },
  ];

  async pulsarBorrar(peli: Movie) {
    const alert = await this.alertController.create({
      header: 'Borrar "' + peli.Title + '"',
      message: 'Esta acción no puede revertirse.',
      buttons: this.alertButtons(peli),
    });
    await alert.present();

  }



  setFav(peli: Movie) {

    const pelicula = this.servicio.getPeliculas().find(obj => obj.imdbID === peli.imdbID);
    if (pelicula) {
      if (pelicula.fav) {
        pelicula.fav = false;
        this.servicio.guardarPelicula();
      } else {
        pelicula.fav = true;
        this.servicio.guardarPelicula();
      }
    }
  }


  buscar(event: any) {

    if (this.favoritos) {
      this.peliculasFiltradas = this.peliculas.filter(peli => peli.Title.toLowerCase().includes(event.target.value.toLocaleLowerCase()) && peli.fav === true);
    } else {
      this.peliculasFiltradas = this.peliculas.filter(peli => peli.Title.toLowerCase().includes(event.target.value.toLocaleLowerCase()));
    }
    this.servicio.setBuscar(this.peliculasFiltradas);
  }


  borrar(peli: Movie) {
    this.servicio.borrarPelicula(peli);
  }

  estaCargando() {
    this.cargando = !this.cargando;
  }


  ngOnInit() {
    addIcons({ heart, heartSharp, heartOutline });
  }

}
