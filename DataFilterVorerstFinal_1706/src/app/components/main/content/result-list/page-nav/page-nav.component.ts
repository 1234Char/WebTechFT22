import {Component, Input, OnInit} from '@angular/core';
import {faAngleDoubleLeft, faAngleDoubleRight, faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {ResultService} from "../../../../../services/result/result.service";
import {GlobalConstants} from "../../../../../common/GlobalConstants";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-nav',
  templateUrl: './page-nav.component.html',
  styleUrls: ['./page-nav.component.css']
})
export class PageNavComponent implements OnInit {
  @Input() pageNum: number;
  @Input() totalPages: number;
  pageNumbers: number[] = [];
  faFirst = faAngleDoubleLeft;
  faPrev = faAngleLeft;
  faNext = faAngleRight;
  faLast = faAngleDoubleRight;


  constructor(private resultService: ResultService, private router: Router) {
  }

  ngOnInit(): void {
    for (let i = 1; i <= this.totalPages; i++) {
      this.pageNumbers.push(i);
    }
  }

  changePageTo(num: number) {
    GlobalConstants.pageParam = "&page=" + num;
    this.router.navigate(["/query"]);
  }

  jumpToFist() {
    this.changePageTo(0);
  }

  jumpToLast() {
    this.changePageTo(this.totalPages - 1);
  }

  nextPage() {
    this.changePageTo(this.pageNum);

  }

  prevPage() {
    this.changePageTo(this.pageNum - 2);

  }

}
