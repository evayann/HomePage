import {Component, Input} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-timeline",
  templateUrl: "./timeline.component.html",
  styleUrls: ["./timeline.component.scss"]
})

export class TimelineComponent {
  @Input() title !: string;
  @Input() events !: Array<TimelineEvent>;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  openLink(link: string): void {
    if (! link) return;
        
    if (link.includes("http") || link.includes("www"))
      window.open(link);
    else 
      this.router.navigate([link]);
  }
}

export interface TimelineEvent {
  date: string;
  status: string;
  icon?: string;
  iconText?: string;
  color?: string;
  image?: string;
  technologies?: string[];
  summary?: string;
  link?: string;
  preview?: boolean;
}
