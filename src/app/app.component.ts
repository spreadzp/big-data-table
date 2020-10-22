import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { DataService } from './services/data.service';
import { GetNewDataTable } from './state/table.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Big table';

  constructor(private dataService: DataService, private store: Store) {}

  ngOnInit() {
    this.dataService.getData()
    .subscribe((data) => {
      if (data) {
        this.store.dispatch(new GetNewDataTable(data));
      }
    });
  }
}
