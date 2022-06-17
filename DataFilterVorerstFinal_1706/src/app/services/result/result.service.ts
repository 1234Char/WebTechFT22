import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Result} from "../../common/Result";
import {HttpClient} from "@angular/common/http";
import {GlobalConstants} from "../../common/GlobalConstants";
import {Objects} from "../../common/Objects";

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  objectUrl: string = 'https://webtech.informatik.unibw-muenchen.de/server/api/discover/search';
  results: Result[] = [];

  constructor(private http: HttpClient) {
  }


  getResponceObjects(parameter: string): Observable<Objects> {

    let search = `${this.objectUrl}/objects${parameter}`;
    console.log(search);
    return this.http.get<any>(search);


  }

  search(): void {
    if (GlobalConstants.allOptions) {
      this.searchContainingAll();
    } else {
      this.searchContainingSome();
    }
  }

  searchContainingAll(): void {

  }

  searchContainingSome(): void {

  }
}
