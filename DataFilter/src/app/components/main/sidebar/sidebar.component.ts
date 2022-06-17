import {Component, OnInit} from '@angular/core';
import {GlobalConstants} from "../../../common/GlobalConstants";
import {faSquare} from "@fortawesome/free-regular-svg-icons";
import {faArrowRotateLeft, faSquareCheck} from "@fortawesome/free-solid-svg-icons";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  allOptions = GlobalConstants.allOptions;
  faSel = faSquareCheck;
  faNotSel = faSquare;
  faReset = faArrowRotateLeft;


  constructor() {
  }


  ngOnInit() {
  }

  toggleAllOptions() {
    GlobalConstants.allOptions = !GlobalConstants.allOptions;
    this.allOptions = GlobalConstants.allOptions;
  }

  resetSidebar(form: FormGroup) {
    if (form !== null) {
      form.reset();
    }

  }
}
