import { CharactersRoutingModule } from './characters.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListModule } from './character-list/character-list.module';

@NgModule({
  imports: [CommonModule, CharacterListModule, CharactersRoutingModule],
})
export class CharactersModule {}
