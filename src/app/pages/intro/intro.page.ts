import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonThumbnail, IonHeader, IonTitle, IonToolbar, IonImg, IonToast, IonProgressBar, IonItem } from '@ionic/angular/standalone';
import { Route, Router } from '@angular/router';

const WAIT_TIME = 3000;

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
  standalone: true,
  imports: [IonItem, IonProgressBar, IonThumbnail, IonToast, IonImg, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class IntroPage implements OnInit {

  constructor(router: Router) {

    setTimeout(() => {
      router.navigate(['pages/milista'])
    }, WAIT_TIME)
  }

  ngOnInit() {
  }

}
