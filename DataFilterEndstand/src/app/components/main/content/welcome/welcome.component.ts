import {Component, OnInit} from '@angular/core';
import {faClose, faSearch} from "@fortawesome/free-solid-svg-icons";
import {Router} from "@angular/router";
import {GlobalConstants} from "../../../../common/GlobalConstants";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  faSearch = faSearch;
  delete = faClose;
  inputMainSearch: string;

  constructor(public router: Router) {
  }

  ngOnInit(): void {
    GlobalConstants.freeMainParam = "";
    GlobalConstants.authorParam = "";
    GlobalConstants.subjectParam = "";
    GlobalConstants.hasContentParam = "";
    GlobalConstants.yearParam = "";
    GlobalConstants.pageParam = "&page=0";
    GlobalConstants.queryParams = "";
  }

  handleInput(event: any) {
    this.inputMainSearch = event.target.value;
  }

  search() {
    GlobalConstants.freeMainParam = "?f.title=" + this.inputMainSearch + ",contains";
    this.router.navigate(["/results"]);
  }
}
