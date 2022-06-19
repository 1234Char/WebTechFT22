import {Component, Input, OnInit} from '@angular/core';
import {Result} from "../../../../../common/Result";
import {GlobalConstants} from "../../../../../common/GlobalConstants";
import {faAngleDown, faAngleUp, faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-result-entry',
  templateUrl: './result-entry.component.html',
  styleUrls: ['./result-entry.component.css']
})
export class ResultEntryComponent implements OnInit {
  @Input() result: Result
  hasShort: boolean;
  showFullResult: boolean = false;
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faExtern = faArrowUpRightFromSquare;
  hasFile: boolean = false;

  ngOnInit(): void {
    this.hasShort = this.result.rShort !== "Keine Zusammenfassung verfügbar.";
    this.hasFile = this.result.rFile;

  }

  setCurrentArticle(result: Result) {
    GlobalConstants.currentArticle = result;
  }

  toggleCompletelyShow() {
    this.showFullResult = !this.showFullResult;
  }
}
