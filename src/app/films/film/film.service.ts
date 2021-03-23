import { Injectable } from '@angular/core';
import * as films from '../../../data/films.json';
import { Film } from './film';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  constructor() {}

  public getAllFilms() {
    return <Film[]>films.results;
  }
}
