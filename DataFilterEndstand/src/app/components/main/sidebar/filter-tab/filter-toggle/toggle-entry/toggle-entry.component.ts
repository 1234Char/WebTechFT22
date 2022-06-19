import {Component, Input} from '@angular/core';
import {faSquareCheck} from "@fortawesome/free-solid-svg-icons";
import {faSquare} from "@fortawesome/free-regular-svg-icons";
import {GlobalConstants} from "../../../../../../common/GlobalConstants";
import {ResultService} from "../../../../../../services/result/result.service";
import {Router} from "@angular/router";
import {GlobalMethods} from "../../../../../../common/GlobalMethods";


@Component({
  selector: 'app-toggle-entry',
  templateUrl: './toggle-entry.component.html',
  styleUrls: ['./toggle-entry.component.css']
})
export class ToggleEntryComponent {
  @Input() category: string;
  @Input() label: string;
  @Input() count: number;
  selected: boolean = false;
  selIcon = faSquareCheck;
  nSelIcon = faSquare

  constructor(private resultService: ResultService, private router: Router) {
  }

  toggleOption() {
    this.selected = !this.selected;

    if (this.selected) {
      /*Add this option*/
      if (this.category === "Autor") {
        GlobalConstants.authorParam = GlobalMethods.concatParamWithString(GlobalConstants.authorParam, "f.author=" + this.label + ",contains")
      } else if (this.category === "Thema") {
        GlobalConstants.subjectParam = GlobalMethods.concatParamWithString(GlobalConstants.subjectParam, "f.subject=" + this.label + ",contains")
      } else if (this.category === "Dateianhang") {
        GlobalConstants.hasContentParam = "f.has_content_in_original_bundle=" + this.label + ",contains";
      }

    } else {
      /*Remove this option*/
      if (this.category === "Autor") {
        GlobalConstants.authorParam = GlobalConstants.authorParam.replace("f.author=" + this.label + ",contains", "");
      } else if (this.category === "Thema") {
        GlobalConstants.subjectParam = GlobalConstants.subjectParam.replace("f.subject=" + this.label + ",contains", "");
      } else if (this.category === "Dateianhang") {
        GlobalConstants.hasContentParam = "";
      }
    }
    this.search();
  }

  private search() {
    this.router.navigate(["/query"]);
  }
}
