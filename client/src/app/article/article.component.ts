import { Component } from '@angular/core';
import { AlternateElement } from '../alternate/alternate.component';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {

  title: String;
  summary: String;
  elements: Array<AlternateElement>;

  constructor(title: String, summary: String, elements: Array<AlternateElement>) { 
    this.title = title;
    this.summary = summary;
    this.elements = elements;
  }

}
