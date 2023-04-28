import { Pokemon } from "./pokemon.interface";

export interface PokemonResponse {
  data: {
    pokemon_v2_pokemon: Pokemon[];
  };
}
