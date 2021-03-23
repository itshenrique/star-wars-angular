import { FilmComponent } from './film/film.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsRoutingModule } from './films.routing.module';

@NgModule({
  declarations: [FilmComponent],
  imports: [CommonModule, FilmsRoutingModule],
})
export class FilmsModule {}
