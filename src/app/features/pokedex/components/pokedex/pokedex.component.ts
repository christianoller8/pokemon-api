import { Component, OnInit } from "@angular/core";
import { GetPokemonListService } from "src/app/shared/implementations/get-pokemon-list.service";
import { Species } from "src/app/shared/contracts/species.interface";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-pokedex",
  templateUrl: "./pokedex.component.html",
  styleUrls: ["./pokedex.component.scss"],
})
export class PokedexComponent implements OnInit {
  pokemon$!: Observable<Species[]>;

  constructor(private getPokemonList: GetPokemonListService) {}

  ngOnInit(): void {
    this.pokemon$ = this.getPokemonList
      .watch({ limit: 50, offset: 0 })
      .valueChanges.pipe(map((result) => result.data.species));

      console.log(this.pokemon$);
  }
}
