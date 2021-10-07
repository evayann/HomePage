import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { TimelineComponent } from "./timeline/timeline.component";

import { TimelineModule } from "primeng/timeline";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { TerminalComponent } from "./terminal/terminal.component";

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    TerminalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    TimelineModule,
    CardModule,
    ButtonModule
  ],
  providers: [],
  exports: [
    TimelineComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
