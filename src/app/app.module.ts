import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { ApolloModule } from "apollo-angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HTTP_INTERCEPTORS, HttpClient } from "@angular/common/http";
import { ErrorInterceptor } from "./core/interceptors/error.interceptor";

import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { PokedexModule } from "./features/pokedex/pokedex.module";
import { GraphQLModule } from "./graphql.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ApolloModule,
    PokedexModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
    GraphQLModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
