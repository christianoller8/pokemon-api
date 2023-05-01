import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandingPageComponent } from "./features/landing/components/landing-page/landing-page.component";

const routes: Routes = [
  {
    path: "",
    component: LandingPageComponent
  },
  {
    path: "pokedex",
    loadChildren: () =>
      import("./features/pokedex/pokedex.module").then((m) => m.PokedexModule),
  },
  {
    path: "details",
    loadChildren: () =>
      import("./features/details/details.module").then((m) => m.DetailsModule),
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
