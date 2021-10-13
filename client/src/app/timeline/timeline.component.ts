import {Component, Input} from "@angular/core";

@Component({
  selector: "app-timeline",
  templateUrl: "./timeline.component.html",
  styleUrls: ["./timeline.component.scss"]
})

export class TimelineComponent {
  @Input() title !: string;
  @Input() events !: Array<TimelineEvent>;

  openLink(link: string): void {
    if (link) window.open(link);
  }
}

export interface TimelineEvent {
  date: string;
  status: string;
  icon?: string;
  iconText?: string;
  color?: string;
  image?: string;
  text?: string;
}
