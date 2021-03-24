import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Film } from './film';
import { FilmService } from './film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css'],
})
export class FilmComponent implements OnInit {
  id: number;
  film: Film;

  constructor(
    private activeRoute: ActivatedRoute,
    private filmService: FilmService
  ) {}

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((params) => {
      this.id = params['id'];
      this.film = this.filmService.getFilmById(this.id);
    });
  }
}
