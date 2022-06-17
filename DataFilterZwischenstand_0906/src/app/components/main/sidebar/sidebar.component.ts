import {Component, OnInit} from '@angular/core';
import {GlobalConstants} from "../../../common/GlobalConstants";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() {
  }



  ngOnInit() {
  }

  toggleAllOptions() {
    GlobalConstants.allOptions=!GlobalConstants.allOptions;
  }
}
