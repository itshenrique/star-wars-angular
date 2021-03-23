import { Injectable } from '@angular/core';
import * as characters from '../../../data/people.json';
import { Character } from './character';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor() {}

  // 1 - Crie uma tela com uma listagem de personagens dos filmes do Star Wars, para preencher esta listagem você deverá consumir o arquivo JSON 'people.json'.
  public getAllCharacters(): Character[] {
    return <Character[]>characters.results;
  }
}
