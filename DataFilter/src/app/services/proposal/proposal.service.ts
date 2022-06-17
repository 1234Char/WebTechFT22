import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Statistic, StatisticEntry} from "../../common/Statistic";
import {Facet} from "../../common/Objects";

@Injectable({
  providedIn: 'root'
})
export class ProposalService {

  proposalUrl: string = 'https://webtech.informatik.unibw-muenchen.de/server/api/discover';

  constructor(private http: HttpClient) {
  }

  getTopOfCategory(parameter: string, array: Statistic[]) {
    this.http.get<any>(`${this.proposalUrl}/facets/${parameter}`).subscribe(fac => this.handleCategoryResponce(fac, array));

  }

  handleCategoryResponce(facet: Facet, array: Statistic[]) {
    for (let f of facet._embedded.values) {
        array.push(new StatisticEntry(f.label, f.count));
    }
  }
}
