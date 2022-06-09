import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Statistic} from "../../common/Statistic";

@Injectable({
  providedIn: 'root'
})
export class StatisticService {

  authorStatsURL: string = 'http://localhost:4200/assets/dbAuthorStats.json'
  topicStatsURL: string = 'http://localhost:4200/assets/dbTopicStats.json'

  constructor(private http: HttpClient) {
  }

  getAuthorStats(): Observable<Statistic[]> {
    return this.http.get<Statistic[]>(this.authorStatsURL);
  }

  getTopicStats(): Observable<Statistic[]> {
    return this.http.get<Statistic[]>(this.topicStatsURL);
  }
}
