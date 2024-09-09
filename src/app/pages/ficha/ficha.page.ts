import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { IonContent, IonMenuButton, IonHeader, IonTitle, IonToolbar, IonToast, IonItemOptions, IonItemOption, IonAvatar, IonLabel, IonItem, IonItemSliding, IonList, IonProgressBar, IonButton, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonCardTitle, IonBackButton, IonChip } from '@ionic/angular/standalone';
import { addIcons } from "ionicons";
import { MoviesManagerService } from 'src/app/service/movies-manager.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interface/movie';
import { HttpomdbService } from 'src/app/service/httpomd/httpomdb.service';
import { MovieDetallada } from 'src/app/interface/movieDetallada';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.page.html',
  styleUrls: ['./ficha.page.scss'],
  standalone: true,
  imports: [IonChip, IonBackButton, IonCardTitle, IonCardContent, IonCardSubtitle, IonCardHeader, IonCard, IonButtons, IonMenuButton, IonButton, IonProgressBar, IonList, IonItemSliding, IonItem, IonLabel, IonAvatar, IonItemOption, IonItemOptions, IonToast, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class FichaPage implements OnInit {
  public dato!: string;
  private activatedRoute = inject(ActivatedRoute);
  private pelicula: MovieDetallada | undefined;



  constructor(private servicio: HttpomdbService, private location: Location) { }

  darFicha(): void {

    this.servicio.mostrarPelicula(this.dato).subscribe(data => {
      if (data.Response === false) {
        console.error("Dato no encontrado");
        this.pelicula = data;

      } else {

        console.log(data.Title);
        this.pelicula = data;
        console.log(this.pelicula);
      }
    })
  }

  getDetallePeli() {
    return this.pelicula;
  }
  pagAtras() {
    this.location.back();
  }

  ngOnInit() {
    this.dato = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.darFicha();
  }

}
