import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngxs/store';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpClient: HttpClient, private store: Store) { }

  getData() {
    return this.httpClient.get<any>(environment.dataSource);
  }
}
