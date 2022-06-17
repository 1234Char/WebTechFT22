import {Result} from "./Result";
import {HttpParams} from "@angular/common/http";
import {Statistic} from "./Statistic";

export class GlobalConstants {
  static currentArticle: Result;
  static allOptions: boolean;
  static authorOptions: Statistic[]=[];
  static hasContentOptions: Statistic[]=[];
  static queryParams: string;
}
