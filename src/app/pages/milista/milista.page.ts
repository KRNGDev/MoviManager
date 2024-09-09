import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonThumbnail, IonMenuButton, IonHeader, IonTitle, IonToolbar, IonButtons, IonList, IonItem, IonInput, IonToggle, IonLabel, IonNote, IonButton, IonItemSliding, IonItemOptions, IonItemOption, IonAvatar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonProgressBar, IonCardContent, IonAlert, IonSearchbar } from '@ionic/angular/standalone';
import { addIcons } from "ionicons";
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MoviesManagerService } from 'src/app/service/movies-manager.service';
import { Movie } from 'src/app/interface/movie';

@Component({
  selector: 'app-milista',
  templateUrl: './milista.page.html',
  styleUrls: ['./milista.page.scss'],
  standalone: true,
  imports: [IonSearchbar, IonAlert, IonCardContent, IonThumbnail, RouterLink, RouterLinkActive, IonProgressBar, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonAvatar, IonItemOption, IonItemOptions, IonItemSliding, IonButton, IonNote, IonLabel, IonToggle, IonInput, IonItem, IonList, IonButtons, IonMenuButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MilistaPage implements OnInit {
  tituloBuscado: string = "";
  peliculas: Movie[];
  peliculasFiltradas: Movie[];
  cargando: boolean = false;




  constructor(protected servicio: MoviesManagerService,private alertController:AlertController) {
    this.peliculas = this.servicio.getPeliculas();
    this.peliculasFiltradas = this.peliculas;
    servicio.setBuscar(this.peliculasFiltradas);
  }



  public alertButtons = (peli:Movie)=>[
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
        this.borrar(peli);

      },
    },
  ];

  async pulsarBorrar(peli:Movie){
    const alert = await this.alertController.create({
      header: '¿Quiere borrarlo de la lista?',
      message: 'La peícula "'+peli.Title+'" se eliminara de su lista',
      buttons: this.alertButtons(peli),
    }); 
    await alert.present();
  
  }

 




  buscar(event:any) {
    this.peliculasFiltradas = this.peliculas.filter(peli => peli.Title.toLowerCase().includes(event.target.value.toLocaleLowerCase()));
    console.log(event);
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
