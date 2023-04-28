import { Injectable } from "@angular/core";
import { Apollo, gql } from "apollo-angular";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Pokemon } from "../contracts/pokemon.interface";
import { PokemonResponse } from "../contracts/response.interface";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(private apollo: Apollo) {}

  getPokemons(): Observable<PokemonResponse> {
    const query = gql`
      query pokemonDetails($name: String!) {
        pokemon_v2_pokemon(where: { name: { _eq: $name } }) {
          name
          id
          height
          pokemon_species_id
          weight
          pokemon_v2_pokemontypes {
            pokemon_v2_type {
              name
              id
              pokemonV2TypeefficaciesByTargetTypeId {
                damage_factor
                pokemon_v2_type {
                  name
                }
              }
            }
          }
          pokemon_v2_pokemonstats {
            base_stat
            pokemon_v2_stat {
              name
            }
          }
          pokemon_v2_pokemonabilities {
            pokemon_v2_ability {
              name
            }
          }
          pokemon_v2_pokemonspecy {
            evolution_chain_id
            pokemon_v2_evolutionchain {
              pokemon_v2_pokemonspecies {
                name
              }
            }
          }
          sprites: pokemon_v2_pokemonsprites {
            sprites_front: front_default
            sprites_back: back_default
          }
        }
      }
    `;
    return this.apollo
      .watchQuery<{ pokemon_v2_pokemon: PokemonResponse[] }>({
        query,
        variables: {
          name: name,
        },
      })
      .valueChanges.pipe(map((result) => result.data.pokemon_v2_pokemon[0]));
  }
}
