import {Input, Component, OnInit} from '@angular/core';
import {faSquareCheck} from "@fortawesome/free-solid-svg-icons";
import {faSquare} from "@fortawesome/free-regular-svg-icons";
import {GlobalConstants} from "../../../../../../common/GlobalConstants";
import {ResultService} from "../../../../../../services/result/result.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-toggle-entry',
  templateUrl: './toggle-entry.component.html',
  styleUrls: ['./toggle-entry.component.css']
})
export class ToggleEntryComponent implements OnInit {
  @Input() category: string;
  @Input() label: string;
  @Input() count: number;
  selected: boolean = false;
  selIcon = faSquareCheck;
  nSelIcon = faSquare

  constructor(private resultServise: ResultService, private router: Router) {
  }

  ngOnInit(): void {
  }

  toggleOption(event: any) {
    this.selected = !this.selected;
    if (this.category === "Autor") {
      GlobalConstants.queryParams = "?query=author:" + this.label;
    }
    this.search()
  }

  private search() {
    if (this.selected) {
      this.router.navigate(["/query"]);
    }
    // this.resultServise.getResponceObjects(GlobalConstants.queryParams);


  }

}
