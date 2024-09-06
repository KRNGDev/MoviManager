import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonImg, IonToast, IonProgressBar } from '@ionic/angular/standalone';
import { Route, Router } from '@angular/router';

const WAIT_TIME = 3000;

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
  standalone: true,
  imports: [IonProgressBar, IonToast, IonImg, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
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
