import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./features/landing/landing.module").then((m) => m.LandingModule),
  },
  {
    path: "details",
    loadChildren: () =>
      import("./features/details/details.module").then((m) => m.DetailsModule),
  },
  {
    path: "pokedex",
    loadChildren: () =>
      import("./features/pokedex/pokedex.module").then((m) => m.PokedexModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
