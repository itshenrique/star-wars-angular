import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

import { FilmComponent } from './film.component';

@NgModule({
  declarations: [FilmComponent],
  imports: [CommonModule, MatListModule, MatCardModule],
})
export class FilmModule {}
