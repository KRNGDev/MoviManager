import { Injectable } from '@angular/core';
import { Movie } from '../interface/movie';
import { HttpomdbService } from './httpomd/httpomdb.service';
import { BuscarPage } from '../pages/buscar/buscar.page';

@Injectable({
  providedIn: 'root'
})
export class MoviesManagerService {
  private peliculas: Movie[] = [];
  private peliBuscar: Movie[] = [];
  constructor() {
    this.rellenarArray();
  }



  public getPeliculas(): Movie[] {
    return this.peliculas;
  }
  public setPelicula(peli: Movie) {

    this.peliculas.push(peli);

  }
  public getBuscar(): Movie[] {
    return this.peliBuscar;
  }
  public setBuscar(peli: Movie[]) {

    this.peliBuscar = peli;

  }

  rellenarArray() {
    let p1: Movie = {
      Title: "Jurassic Park",
      Type: "Thriller",
      Year: 1994,
      imdbId: '',
      Poster: "https://upload.wikimedia.org/wikipedia/en/9/93/Jurassic_Park_%28franchise_logo%29.png",
      sinopsis: "Peliculon que no veas ",
      fav: true,
    }
    let p2: Movie = {
      Title: "Señor de los Anillos",
      Type: "Aventuras",
      Year: 2001,
      Poster: "https://proassetspdlcom.cdnstatics2.com/usuaris/libros/fotos/210/original/portada_el-senor-de-los-anillos_j-r-r-tolkien_201601252224.jpg",
      sinopsis: "Peliculon que no veas ",
      fav: true,
      imdbId: '',
    }
    let p3: Movie = {
      Title: "Batman",
      Type: "Aventuras",
      Year: 1989,
      Poster: "https://xl.movieposterdb.com/14_08/1989/96895/xl_96895_e2b89c79.jpg",
      sinopsis: "Peliculon que no veas ",
      fav: true,
      imdbId: '',
    }
    this.peliculas.push(p1);
    this.peliculas.push(p2);
    this.peliculas.push(p3);

  }

}
