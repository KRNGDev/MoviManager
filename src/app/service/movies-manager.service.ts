import { Injectable } from '@angular/core';
import { Movie } from '../interface/movie';
import { Storage } from '@ionic/storage-angular'
import { Observable } from 'rxjs';

const NODO_RAIZ = "peliculas";

@Injectable({
  providedIn: 'root'
})
export class MoviesManagerService {
  private peliculas: Movie[] = [];
  private peliBuscar: Movie[] = [];
  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    this.storage = await this.storage.create().finally(() => {
      this.rellenarArray();
    });
  }

  rellenarArray() {
    this.storage.get(NODO_RAIZ).
      then((peliculasDB) => {
        if (peliculasDB != null) {
          peliculasDB.forEach((element: Movie) => {
            this.peliculas.push(element);
          });

        }
      })
  }

  borrarPelicula(peli: Movie) {
    this.peliculas.splice(this.peliculas.indexOf(peli), 1);
  }



  //Metodo privado para agregar la pelicula ala base de datos local

  guardarPelicula() {
    this.storage.get(NODO_RAIZ).
      then((data) => {

        this.storage.set(NODO_RAIZ, this.peliculas);

      }).
      catch((error) => {
        console.error("Error:" + error);
      }).
      finally(() => {
        console.log("Fin del proceso de almacenamiento");
      });
  }
  //Metodo Público para rellenar array

  public setPelicula(peli: Movie) {
    console.log(peli.Title);
    console.log(peli.imdbID);
    if (this.peliculas.find(obj => obj.imdbID === peli.imdbID)) {
      throw new Error("La pelicula ya esta en la lista")
    } else {
      this.peliculas.push(peli);
      this.guardarPelicula();
    }


  }


  //Obtener todas las películas

  public getPeliculas(): Movie[] {
    return this.peliculas;
  }

  public getBuscar(): Movie[] {
    return this.peliBuscar;
  }
  public setBuscar(peli: Movie[]) {

    this.peliBuscar = peli;

  }


}
