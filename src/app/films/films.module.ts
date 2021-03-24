import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmModule } from './film/film.module';
import { FilmsRoutingModule } from './films.routing.module';

@NgModule({
  imports: [CommonModule, FilmModule, FilmsRoutingModule],
})
export class FilmsModule {}
