import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Result} from "../../common/Result";
import {HttpClient} from "@angular/common/http";
import {Objects} from "../../common/Objects";

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  objectUrl: string = 'https://webtech.informatik.unibw-muenchen.de/server/api/discover/search';
  results: Result[] = [];

  constructor(private http: HttpClient) {
  }


  public getResponseObjects(parameter: string): Observable<Objects> {

    let search = `${this.objectUrl}/objects${parameter}`;
    return this.http.get<any>(search);
  }
}
