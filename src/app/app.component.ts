import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink, IonTitle, IonFooter } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, exit, exitOutline, exitSharp, search, searchCircle, searchOutline, searchSharp, searchCircleOutline, searchCircleSharp, library, libraryOutline, librarySharp, planet, planetOutline, planetSharp, home, homeOutline, homeSharp, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonFooter, IonTitle, RouterLink, RouterLinkActive, CommonModule, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet,],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/pages/inicio', icon: 'home' },
    { title: 'Buscar', url: '/pages/buscar', icon: 'search' },
    { title: 'Mi lista', url: '/pages/milista', icon: 'library' },
  ];
  public labels = ['Accion', 'Fantasia', 'Terror'];
  constructor() {
    addIcons({ mailOutline, exit, exitOutline, exitSharp, search, searchOutline, searchSharp, searchCircle, searchCircleOutline, searchCircleSharp, library, libraryOutline, librarySharp, planet, planetOutline, planetSharp, home, homeOutline, homeSharp, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });
  }

}
