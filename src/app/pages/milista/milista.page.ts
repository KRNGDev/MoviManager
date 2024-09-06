import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonThumbnail, IonMenuButton, IonHeader, IonTitle, IonToolbar, IonButtons, IonList, IonItem, IonInput, IonToggle, IonLabel, IonNote, IonButton, IonItemSliding, IonItemOptions, IonItemOption, IonAvatar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonProgressBar, IonCardContent, IonAlert } from '@ionic/angular/standalone';
import { addIcons } from "ionicons";
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MoviesManagerService } from 'src/app/service/movies-manager.service';
import { Movie } from 'src/app/interface/movie';

@Component({
  selector: 'app-milista',
  templateUrl: './milista.page.html',
  styleUrls: ['./milista.page.scss'],
  standalone: true,
  imports: [IonAlert, IonCardContent, IonThumbnail, RouterLink, RouterLinkActive, IonProgressBar, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonAvatar, IonItemOption, IonItemOptions, IonItemSliding, IonButton, IonNote, IonLabel, IonToggle, IonInput, IonItem, IonList, IonButtons, IonMenuButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MilistaPage implements OnInit {
  tituloBuscado: string = "";
  peliculas: Movie[];
  peliculasFiltradas: Movie[];
  cargando: boolean = false;
  borrando: boolean = false;

  public alertButtons = [
    {
      text: 'Cancelar',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'Borrar',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];

  eliminar(id: number) {
    console.log("Eliminando...")
    this.borrando = true;

  }

  ocultarDialogo() {
    this.borrando = false;
  }


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
  borrar(peli: Movie) {
    this.servicio.borrarPelicula(peli);
  }

  estaCargando() {
    this.cargando = !this.cargando;
  }


  ngOnInit() {
  }

}
