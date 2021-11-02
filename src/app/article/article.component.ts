import { Component, Input } from '@angular/core';
import { AlternateElement } from '../alternate/alternate.component';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {

  @Input() title!: String;
  @Input() summary!: String;
  @Input() elements: Array<AlternateElement> | null = null;
}
