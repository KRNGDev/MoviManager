import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { IonContent, IonMenuButton, IonHeader, IonTitle, IonToolbar, IonToast, IonItemOptions, IonItemOption, IonAvatar, IonLabel, IonItem, IonItemSliding, IonList, IonProgressBar, IonButton, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonCardTitle } from '@ionic/angular/standalone';
import { addIcons } from "ionicons";
import { MoviesManagerService } from 'src/app/service/movies-manager.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interface/movie';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.page.html',
  styleUrls: ['./ficha.page.scss'],
  standalone: true,
  imports: [IonCardTitle, IonCardContent, IonCardSubtitle, IonCardHeader, IonCard, IonButtons, IonMenuButton, IonButton, IonProgressBar, IonList, IonItemSliding, IonItem, IonLabel, IonAvatar, IonItemOption, IonItemOptions, IonToast, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class FichaPage implements OnInit {
  public dato!: string;
  private activatedRoute = inject(ActivatedRoute);
  public movie: Movie[] = this.servicio.getBuscar();


  constructor(private servicio: MoviesManagerService, private location: Location) { }

  darFicha(): Movie {
    return this.movie[Number(this.dato)];
  }
  pagAtras() {
    this.location.back();
  }

  ngOnInit() {
    this.dato = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

}
