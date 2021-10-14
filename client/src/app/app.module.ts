import { NgModule } from "@angular/core";
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
import { Graph3dComponent } from './graph3d/graph3d.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    TerminalComponent,
    StoryComponent,
    Graph3dComponent
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
  providers: [],
  exports: [
    TimelineComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
