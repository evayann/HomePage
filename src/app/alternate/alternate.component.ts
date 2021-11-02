import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alternate',
  templateUrl: './alternate.component.html',
  styleUrls: ["./alternate.component.scss"]
})
export class AlternateComponent {

  private l: string = "LEFT";
  private r: string = "RIGHT";

  @Input() elements !: Array<AlternateElement> | null;
  @Input() start : string = this.l;

  position: number;

  constructor() { 
    this.position = this.start === this.l ? 1 : 0;
  }
}

export interface AlternateElement {
  title: string,
  img: string,
  texts: string[];
}
