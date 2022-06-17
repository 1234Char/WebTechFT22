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
  apiUrl: string = 'https://webtech.informatik.unibw-muenchen.de/server/#/server/api';
  objectUrl: string='https://webtech.informatik.unibw-muenchen.de/server/api/discover/search';
  testUrl: string = 'http://localhost:4200/assets/dbContent.json'
  results: Result[] = [];

  constructor(private http: HttpClient) {
  }


  getResponceObjects(parameter : string): Observable<Objects> {
    console.log((`${this.objectUrl}/objects${parameter}`))
    return this.http.get<any>(`${this.objectUrl}/objects${parameter}`);
  }

  search(): void{
    if(GlobalConstants.allOptions){
      this.searchContainingAll();
    }else{
      this.searchContainingSome();
    }
    this.http.get<Result[]>(this.testUrl)
  }

  searchContainingAll(): void{

  }

  searchContainingSome(): void{

  }
}
