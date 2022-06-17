import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MainSearchService {

  mainSearchUrl: string = '';

  constructor(private http: HttpClient) {
  }
}
