import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { Character } from './../character/character';
import { CharacterService } from '../character/character.service';
import { Film } from './../../films/film/film';
import { FilmService } from './../../films/film/film.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
})
export class CharacterListComponent implements OnInit, AfterViewInit {
  columnsToDisplay: string[] = ['id', 'name', 'films', 'gender', 'birth_year'];
  isInputEmpty: boolean = true;
  characters: Character[] = [];
  dataSource: MatTableDataSource<Character> = new MatTableDataSource<Character>(
    this.characters
  );
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  films: Film[] = [];

  constructor(
    private router: Router,
    private characterService: CharacterService,
    private filmService: FilmService
  ) {}

  ngOnInit(): void {
    this.characters = this.characterService.getAllCharacters();
    this.films = this.filmService.getAllFilms();
    this.sortByName(this.characters);
    this.sortByCountFilms(this.characters);
    this.dataSource = new MatTableDataSource<Character>(this.characters);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = (
      character: Character,
      filter: string
    ) => {
      return (
        character.name.toLowerCase().includes(filter.toLowerCase()) ||
        character.gender.toLowerCase() === filter.toLowerCase() ||
        character.birth_year.toLowerCase().includes(filter)
      );
    };
  }

  sortByName(characters: Character[]): void {
    characters.sort((a, b) => a.name.localeCompare(b.name));
  }

  sortByCountFilms(characters: Character[]): void {
    characters.sort((a, b) => b.films.length - a.films.length);
  }

  cleanFilter(): void {
    this.dataSource.filter = '';
  }

  filterData(event: any): void {
    const filter = event.target.value;
    if (filter) {
      this.isInputEmpty = false;
      this.dataSource.filter = filter;
    } else {
      this.isInputEmpty = true;
      this.dataSource = new MatTableDataSource<Character>(this.characters);
    }
  }

  getFilmTitleById(id: number): string {
    const film = this.films.find((film) => film.id === id);
    return film!.title;
  }

  navigateToFilm(id: number): void {
    console.log(id);
    this.router.navigate(['/films/'], {
      queryParams: { film: id },
    });
  }
}
