import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Graph3dComponent } from "./graph3d/graph3d.component";
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
