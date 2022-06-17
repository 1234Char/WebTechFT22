import {Component, Input, OnInit} from '@angular/core';
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {GlobalConstants} from "../../../../../common/GlobalConstants";
import {Statistic} from "../../../../../common/Statistic";
import {GlobalMethods} from "../../../../../common/GlobalMethods";
import {Router} from "@angular/router";
import {ProposalService} from "../../../../../services/proposal/proposal.service";

@Component({
  selector: 'app-filter-toggle',
  templateUrl: './filter-toggle.component.html',
  styleUrls: ['./filter-toggle.component.css']
})
export class FilterToggleComponent implements OnInit {
  @Input() category: string;
  faSearch = faSearch;
  searchInput: string;
  stats: Statistic[] = [];
  gotResponse: boolean;

  constructor(private router: Router, private propService: ProposalService) {

  }

  ngOnInit(): void {
    if (this.category === "Autor") {
      this.stats = GlobalConstants.authorOptions;
    } else if (this.category === "Thema") {
      this.stats = GlobalConstants.subjectOptions;
    } else if (this.category === "Dateianhang") {
      this.stats = GlobalConstants.hasContentOptions;
    }
    this.gotResponse = this.stats.length !== 0;
  }


  getInput(event: any) {
    this.searchInput = event.target.value;
  }

  lookFor(): void {
    if (this.category === "Autor") {
      GlobalConstants.authorParam = GlobalMethods.concatParamWithString(GlobalConstants.authorParam, "f.author=" + this.searchInput + ",contains")
    } else if (this.category === "Thema") {
      GlobalConstants.subjectParam = GlobalMethods.concatParamWithString(GlobalConstants.subjectParam, "f.subject=" + this.searchInput + ",contains")
    }
    this.router.navigate(["/query"]);
  }

  submit(event: KeyboardEvent) {
    if (event.key === "Enter") {
      this.lookFor();
    }
  }
}
