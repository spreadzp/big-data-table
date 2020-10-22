import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { IPaginator } from '../../shared/interfaces/paginator.interface';

@Component({
  selector: 'app-total-table',
  templateUrl: './total-table.component.html',
  styleUrls: ['./total-table.component.scss'],
})
export class TotalTableComponent implements OnInit {
  allData = [];
  paginationOptions = {} as IPaginator;
  headerNames = null;
  showTable = false;
  metaData = null;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.subscribe((dataStore) => {
      if (dataStore.TableState && dataStore.TableState.tableData) {
        this.paginationOptions.showPaginator = false;
        const meta = dataStore.TableState.tableData.meta;
        if (meta) {
          this.allData.push(Object.values(meta.total));
          const keysTotal = Object.keys(meta.total);

          this.headerNames = keysTotal.map(
            (item) =>
              meta.columns.find((columnMetaData) => columnMetaData.key === item)
                .title
          );

          this.metaData = this.headerNames.map((name) =>
            meta.columns.find((column) => name === column.title)
          );
          this.showTable = true;
        }
      }
    });
  }
}
