import { Component, OnInit } from '@angular/core';
import {faBookOpen} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.css']
})
export class HeaderMainComponent implements OnInit {
  faBook=faBookOpen;

  constructor() { }

  ngOnInit(): void {
  }

}
