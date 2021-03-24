import { Injectable } from '@angular/core';
import * as films from '../../../data/films.json';
import { Film } from './film';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  constructor() {}

  public getFilmById(id: number): Film {
    return films.results.find((film) => film.id == id)!;
  }

  public getAllFilms(): Film[] {
    return films.results;
  }
}
