import { Component } from "@angular/core";
import { UiThemesService } from "./ui-themes.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})

export class AppComponent {

  constructor(private uiStyleToggleService: UiThemesService) { }

  toggleTheme(): void {
    this.uiStyleToggleService.toggle();
  }

  isDark(): boolean {
    return this.uiStyleToggleService.isDark();
  }

  counter(length: number): Array<any> {  
    return new Array(length);
  }
}
