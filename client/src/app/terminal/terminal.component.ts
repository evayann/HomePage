import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";

@Component({
  selector: "app-terminal",
  templateUrl: "./terminal.component.html",
  styleUrls: ["./terminal.component.scss"]
})
export class TerminalComponent implements OnChanges {
  @Input() text !: string;
  @Input() timer : number = 100;

  view: string = "";
  private counter: number = 0;
  private animation: number | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    // Reset previous animation
    if (this.animation) {
      this.view = "";
      this.counter = 0;
      clearInterval(this.animation);
    }

    this.animation = setInterval(() => {
      // Check if text totaly display and stop interval if it's case
      if (this.counter === this.text.length)
        clearInterval(this.animation);
      this.view = this.text.slice(0, this.counter) + (this.counter++ === this.text.length ? "" : "|");
    }, this.timer);
  }
}
