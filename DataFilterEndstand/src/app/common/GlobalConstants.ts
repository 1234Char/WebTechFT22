import {Result} from "./Result";
import {Statistic} from "./Statistic";

export class GlobalConstants {
  static currentArticle: Result;
  static allOptions: boolean;
  static authorOptions: Statistic[] = [];
  static subjectOptions: Statistic[] = [];
  static hasContentOptions: Statistic[] = [];

  static queryParams: string;
  static pageParam: string = "&page=0";
  static authorParam: string = "";
  static subjectParam: string = "";
  static hasContentParam: string = "";
  static yearParam: string = "";
  static freeMainParam: string = "";


}
