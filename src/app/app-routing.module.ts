import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Graph3dComponent } from "./article/graph3d/graph3d.component";
import { Two048Component } from "./article/2048/two048.component";
import { StoryComponent } from "./story/story.component";

const routes: Routes = [
  {
    path: "story", 
    component: StoryComponent
  },
  {
    path: "graph3d",
    component: Graph3dComponent
  },
  {
    path: "2048",
    component: Two048Component
  },
  {
    path: "", // Redirection when open site
    redirectTo: "/story",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
