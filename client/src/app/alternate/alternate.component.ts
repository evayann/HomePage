import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alternate',
  templateUrl: './alternate.component.html'
})
export class AlternateComponent {

  private l: string = "LEFT";
  private r: string = "RIGHT";

  @Input() elements !: Array<AlternateElement>
  @Input() start : string = this.l;

  position: string;

  constructor() { 
    this.position = this.start;
  }

  isRight(): boolean {
    return this.position === this.r;
  }

  isRightAndUpdate(): boolean {
    const old = this.position;
    this.position = old === this.l ? this.r : this.l;
    return old === this.r;
  }
}

export interface AlternateElement {
  title: string,
  img: string,
  text: string;
}
