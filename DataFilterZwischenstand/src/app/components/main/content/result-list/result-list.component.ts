import {Component, OnInit} from '@angular/core';
import {Result, ResultEntry} from "../../../../common/Result";
import {ResultService} from "../../../../services/result/result.service";
import {DBObject, Objects} from "../../../../common/Objects";
import {GlobalConstants} from "../../../../common/GlobalConstants";

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {
  results: Result[] = [];
  idList: any[] = [];

  constructor(private resultService: ResultService) {
  }

  ngOnInit(): void {
    this.resultService.getResponceObjects(GlobalConstants.queryParams).subscribe(
      (response) => this.useObjectResponse(response));
  }


  private useObjectResponse(response: Objects) {
    for (let obj of response._embedded.searchResult._embedded.objects) {
      let object = obj._embedded.indexableObject;
      let authors: string = "";
      for (let aut of object.metadata["dc.contributor.author"]) {
        authors = authors + aut.value + "; ";
      }
      let year: string = "";
      for (let y of object.metadata["dc.date.issued"]) {
        year = y.value;
      }
      let short: string="";
      if(object.metadata["dc.description.abstract"]!==undefined){
        for (let s of object.metadata["dc.description.abstract"]){
          short=s.value;
        }
      }else{
        short="Kein Kurztext verfügbar."
      }


      let result = new ResultEntry(authors, "", short, object.name, year);
      this.results.push(result);
    }
  }
}
