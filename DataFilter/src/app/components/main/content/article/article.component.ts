import {Component, Input, OnInit} from '@angular/core';
import {Result} from "../../../../common/Result";
import {GlobalConstants} from "../../../../common/GlobalConstants";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article: Result=GlobalConstants.currentArticle;

  constructor() {
  }

  ngOnInit(): void {
  }

}
