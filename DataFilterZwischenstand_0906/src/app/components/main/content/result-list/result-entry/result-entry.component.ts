import {Component, Input, OnInit} from '@angular/core';
import {Result} from "../../../../../common/Result";
import {GlobalConstants} from "../../../../../common/GlobalConstants";
import {ResultService} from "../../../../../services/result/result.service";


@Component({
  selector: 'app-result-entry',
  templateUrl: './result-entry.component.html',
  styleUrls: ['./result-entry.component.css']
})
export class ResultEntryComponent implements OnInit {
   @Input() result: Result
  results: Result[]=[];

  constructor(private resultService: ResultService) { }

  ngOnInit(): void {

  }

  setCurrentArticle(result: Result) {
    GlobalConstants.currentArticle=result;
  }
}
