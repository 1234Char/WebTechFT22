import { Component, OnInit } from '@angular/core';
import {GlobalConstants} from "../../common/GlobalConstants";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Facet, Objects} from "../../common/Objects";
import {Statistic, StatisticEntry} from "../../common/Statistic";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  filterValuesUrl: string='https://webtech.informatik.unibw-muenchen.de/server/api/discover';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getTopOfCategory("author", GlobalConstants.authorOptions);
    this.getTopOfCategory("has_content_in_original_bundle", GlobalConstants.hasContentOptions);
  }

  getTopOfCategory(parameter: string, array: Statistic[]){
    this.http.get<any>(`${this.filterValuesUrl}/facets/${parameter}`).subscribe(fac => this.handleCategoryResponce(fac, array));

  }

  handleCategoryResponce(facet: Facet, array: Statistic[]){
      for(let f of facet._embedded.values){
        if(f.label==="true"){
          array.push(new StatisticEntry("Ja", f.count));
        }else if(f.label==="false"){
          array.push(new StatisticEntry("Nein", f.count));
        }else
       array.push(new StatisticEntry(f.label, f.count));
      }
  }





}
