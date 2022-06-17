import {Component, OnInit} from '@angular/core';
import {Result, ResultEntry} from "../../../../common/Result";
import {ResultService} from "../../../../services/result/result.service";
import {Objects} from "../../../../common/Objects";
import {GlobalConstants} from "../../../../common/GlobalConstants";

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {
  results: Result[] = [];
  resultCount: number = 0;
  pageNumber: number = 0;
  totalPages: number = 0;


  constructor(private resultService: ResultService) {
  }

  ngOnInit(): void {
    GlobalConstants.queryParams = "";
    if (GlobalConstants.freeMainParam !== "") {
      GlobalConstants.queryParams = GlobalConstants.freeMainParam;
    }
    this.updateQueryParam();
    this.getResultsFromSidebarFilter();

  }

  /*Implementation of to top button*/
  scrollToTop() {
    (function smoothScroll() {
      let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothScroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
    })();
  }

  private getResultsFromSidebarFilter() {
    this.resultService.getResponceObjects(GlobalConstants.queryParams).subscribe(
      (response) => this.loadGeneralPageData(response),);
    this.resultService.getResponceObjects(GlobalConstants.queryParams).subscribe(
      (response) => this.useObjectResponse(response));
  }

  private loadGeneralPageData(response: Objects) {
    let pageData = response._embedded.searchResult.page
    this.resultCount = pageData.totalElements;
    if (pageData.totalPages !== 0) {
      this.pageNumber = pageData.number + 1;
    }

    this.totalPages = pageData.totalPages;
  }

  private useObjectResponse(response: Objects) {
    for (let obj of response._embedded.searchResult._embedded.objects) {
      let object = obj._embedded.indexableObject;

      /*Author*/
      let authors: string = "";
      if (object.metadata["dc.contributor.author"] !== undefined) {
        let metaAuthor = object.metadata["dc.contributor.author"];
        for (let aut of metaAuthor) {
          authors = authors + aut.value;
          if (metaAuthor.indexOf(aut) !== metaAuthor.length - 1) {
            authors = authors + "; ";
          }
        }
      }

      /*Year*/
      let year: string = "";
      if (object.metadata["dc.date.issued"] !== undefined) {
        for (let y of object.metadata["dc.date.issued"]) {
          year = y.value;
        }
      }

      /*Short Text*/
      let short: string = "";
      if (object.metadata["dc.description.abstract"] !== undefined) {
        for (let s of object.metadata["dc.description.abstract"]) {
          short = s.value;
        }
      } else {
        short = "Keine Zusammenfassung verfügbar."
      }

      /*Link to DSpace Page*/
      let link: string = "";
      if (object.metadata["dc.identifier.uri"] !== undefined) {
        for (let l of object.metadata["dc.identifier.uri"]) {
          link = l.value;
        }
      }

      /*Contains File*/
      let file = (object.metadata["dc.identifier.doi"] !== undefined);

      let result = new ResultEntry(authors, link, short, object.name, year, file);
      this.results.push(result);
    }
  }

  private updateQueryParam() {
    let queryParams = GlobalConstants.queryParams;
    let params: string[] = [GlobalConstants.authorParam, GlobalConstants.subjectParam, GlobalConstants.hasContentParam, GlobalConstants.yearParam];

    for (let p of params) {
      if (p !== "") {
        if (queryParams === "") {
          queryParams = "?" + p;
        } else {
          queryParams = queryParams + "&" + p;
        }
      }
    }
    GlobalConstants.queryParams = queryParams + GlobalConstants.pageParam;


    /*format string to remove concat params for unselecting*/
    GlobalConstants.queryParams = GlobalConstants.queryParams.replace("?&", "?");
    while (GlobalConstants.queryParams.includes("&&")) {
      GlobalConstants.queryParams = GlobalConstants.queryParams.replace("&&", "&");
    }

  }


}
