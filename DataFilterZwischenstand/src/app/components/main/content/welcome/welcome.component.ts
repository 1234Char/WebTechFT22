import { Component, OnInit } from '@angular/core';
import {faSearch, faClose} from "@fortawesome/free-solid-svg-icons";
import {Router} from "@angular/router";
import {GlobalConstants} from "../../../../common/GlobalConstants";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  faSearch= faSearch;
  delete= faClose;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  handleInput($event: any) {
    if($event.key==="Enter"){
      console.log($event.target.value)
      this.search($event.target.value);
    }
  }

  search(param: string){
    GlobalConstants.queryParams=param;
    this.router.navigate(["/results"]);
  }
}
