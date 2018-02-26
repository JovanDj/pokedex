import {Component, OnInit} from '@angular/core';
import {PokemonService} from '../core/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemonList: any;
  imageLink = 'assets/pokemon-sprites/sprites/pokemon/';

  constructor(private pokemonService: PokemonService) {
  }


  getPokemon(limit: string): void {
    this.pokemonService.getPokemon(limit).subscribe(
      pokemon => {
        this.pokemonList = pokemon;
      }
    );
  }

  ngOnInit() {
    this.getPokemon('151');
  }

}
