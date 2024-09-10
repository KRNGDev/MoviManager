import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { MovieDetallada } from 'src/app/interface/movieDetallada';
import { environment } from 'src/environments/environment';

const BASE_URL = environment.OMDB_BASE_URL;
const API_KEY = environment.OMDB_API_KEY;

@Injectable({
  providedIn: 'root'
})
export class HttpomdbService {
  private http = inject(HttpClient);
  public movies: any[] = [];
  private idRandom: string = "";

  constructor() { }

  getMovies(title: string): Observable<any> {
    return this.http.get<any>(`${BASE_URL}?apikey=${API_KEY}&s=${title}`).pipe(delay(1000));
  }

  mostrarPelicula(id: string): Observable<MovieDetallada> {
    return this.http.get<any>(`${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`)
  }

  mostrarRecomendada(): Observable<MovieDetallada> {
    this.idRandom = "tt" + ("0000000" + Math.floor(Math.random() * 9999999)).slice(-7);
    console.log(this.idRandom);
    return this.http.get<any>(`${BASE_URL}?apikey=${API_KEY}&i=${this.idRandom}&plot=full`)
  }
}
