import { Component } from "@angular/core";
import { AuthService } from "src/app/shared/implementations/auth.service";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"],
})
export class LandingPageComponent {
  constructor(private authService: AuthService) {
    this.authService.currentRol();
  }
}
