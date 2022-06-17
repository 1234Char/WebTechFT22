import {Component, Input, OnInit} from '@angular/core';
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {GlobalConstants} from "../../../../../common/GlobalConstants";
import {StatisticService} from "../../../../../services/statistic/statistic.service";
import {Statistic} from "../../../../../common/Statistic";

@Component({
  selector: 'app-filter-toggle',
  templateUrl: './filter-toggle.component.html',
  styleUrls: ['./filter-toggle.component.css']
})
export class FilterToggleComponent implements OnInit {
  @Input() category: string;
  faSearch = faSearch;
  searchInput: string;
  stats: Statistic[] = [];

  constructor() {

  }

  ngOnInit(): void {
    if (this.category === "Autor") {
      if(GlobalConstants.authorOptions.length>5){
        let ctr:number=0;
        for (let stat of GlobalConstants.authorOptions){
          if(ctr<5){
            this.stats.push(stat);
            ctr++;
          }
        }
      }else{
        this.stats=GlobalConstants.authorOptions;
      }

    } else if (this.category === "Dateianhang") {
      this.stats=GlobalConstants.hasContentOptions;
    }
  }


  getInput(event: any) {
    this.searchInput = event.target.value;
    console.log(this.searchInput)

  }
}
