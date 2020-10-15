import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
sourceUrl = 'https://raw.githubusercontent.com/spreadzp/big-data-table/master/data.json';
  constructor(private httpClient: HttpClient) {

  }

 getData() {
  return this.httpClient.get<any>(this.sourceUrl);

 }
 getMetaData() {
  return this.httpClient.get<any>(this.sourceUrl);
 }
}
