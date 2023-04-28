import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/shared/implementations/data.service";
import { Pokemon } from "src/app/shared/contracts/pokemon.interface";
import { PokemonResponse } from "src/app/shared/contracts/response.interface";

@Component({
  selector: "app-pokedex",
  templateUrl: "./pokedex.component.html",
  styleUrls: ["./pokedex.component.css"],
})
export class PokedexComponent implements OnInit {
  pokemons: Pokemon[] = [];

  constructor(private pokeService: DataService) {}

  ngOnInit(): void {
    this.pokeService.getPokemons().subscribe((response: PokemonResponse) => {
      this.pokemons = response.data.pokemon_v2_pokemon;
    });
  }
}
