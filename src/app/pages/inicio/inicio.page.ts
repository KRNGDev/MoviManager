import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonMenuButton, IonHeader, IonTitle, IonToolbar, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCard, IonCardContent, IonButtons, IonAvatar, IonChip, IonButton } from '@ionic/angular/standalone';
import { MoviesManagerService } from 'src/app/service/movies-manager.service';
import { Movie } from 'src/app/interface/movie';
import { MovieDetallada } from 'src/app/interface/movieDetallada';
import { HttpomdbService } from 'src/app/service/httpomd/httpomdb.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonButton, IonChip, IonAvatar, IonButtons, IonMenuButton, IonCardContent, IonCard, IonCardSubtitle, IonCardTitle, IonCardHeader, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class InicioPage implements OnInit {

  private peliRecomendada!: MovieDetallada;
  numRandom = Math.floor(Math.random() * this.servicio.getPeliculas().length);
  peli:Movie=this.servicio.getPeliculas()[this.numRandom];

  constructor(private http: HttpomdbService, private servicio: MoviesManagerService) { }

  peliculaRecomendada(): void {
    this.http.mostrarPelicula(this.peli.imdbID).subscribe(data => {
      if (data.Response === false) {
        console.error("Dato no encontrado");
        this.peliRecomendada = data;

      } else {

        console.log(data.Title);
        this.peliRecomendada = data;
        console.log(this.peliRecomendada);
      }
    })
   
  }

  getRecomendada(){
    return this.peliRecomendada;
  }

  ngOnInit() {
    this.peliculaRecomendada();
  }

}
