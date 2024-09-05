import { Injectable } from '@angular/core';
import { Movie } from '../interface/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesManagerService {
  private peliculas: Movie[] = [];
  constructor() {
    this.rellenarArray();
  }

  

  public getPeliculas(): Movie[] {
    return this.peliculas;
  }

  rellenarArray() {
    let p1: Movie = {
      titulo: "Jurassic Park",
      generos: "Thriller",
      fecha: 1994,
      poster: "https://upload.wikimedia.org/wikipedia/en/9/93/Jurassic_Park_%28franchise_logo%29.png",
      sinopsis: "Peliculon que no veas ",
      fav: true,
    }
    let p2: Movie = {
      titulo: "Señor de los Anillos",
      generos: "Aventuras",
      fecha: 2001,
      poster: "https://proassetspdlcom.cdnstatics2.com/usuaris/libros/fotos/210/original/portada_el-senor-de-los-anillos_j-r-r-tolkien_201601252224.jpg",
      sinopsis: "Peliculon que no veas ",
      fav: true,
    }
    let p3: Movie = {
      titulo: "Batman",
      generos: "Aventuras",
      fecha: 1989,
      poster: "https://xl.movieposterdb.com/14_08/1989/96895/xl_96895_e2b89c79.jpg",
      sinopsis: "Peliculon que no veas ",
      fav: true,
    }
    this.peliculas.push(p1);
    this.peliculas.push(p2);
    this.peliculas.push(p3);

  }

}
