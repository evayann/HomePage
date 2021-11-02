import { APP_INITIALIZER, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { TimelineComponent } from "./timeline/timeline.component";
import { TerminalComponent } from "./terminal/terminal.component";

import { TimelineModule } from "primeng/timeline";
import { ButtonModule } from "primeng/button";
import { ImageModule } from "primeng/image";
import { CardModule } from "primeng/card";

import { StoryComponent } from './story/story.component';
import { AlternateComponent } from './alternate/alternate.component';

import { ArticleComponent } from './article/article.component';
import { Graph3dComponent } from './article/graph3d/graph3d.component';
import { Two048Component } from './article/2048/two048.component';

/* #region  Service */
import { UiThemesService } from './ui-themes.service';
import { LocalStorageService } from './local-storage.service';
/* #endregion */


export function themeFactory(themeService: UiThemesService) {
  return () => themeService.setThemeOnStart();
}

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    TerminalComponent,
    StoryComponent,
    AlternateComponent,

    ArticleComponent,
    Graph3dComponent,
    Two048Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    AppRoutingModule,

    TimelineModule,

    CardModule,
    ImageModule,
    ButtonModule
  ],
  providers: [
    UiThemesService,
    LocalStorageService,
    { provide: APP_INITIALIZER, useFactory: themeFactory, deps: [UiThemesService], multi: true },
  ],
  exports: [
    TimelineComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
