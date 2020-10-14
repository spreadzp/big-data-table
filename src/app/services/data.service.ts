import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {

  }

 getPrice() {
  return this.httpClient.get<any>('https://api.binance.com/api/v3/ticker/price?symbol=ICXUSDT');

 }
}
