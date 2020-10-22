import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { IPaginator } from '../../shared/interfaces/paginator.interface';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.scss'],
})
export class MainTableComponent implements OnInit {
  allData = {} as any;
  paginationOptions = {} as IPaginator;
  headerNames = null;
  showTable = false;
  metaData = null;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.subscribe((storeData) => {
      const tableData = storeData.TableState.tableData;
      if (tableData && tableData.meta) {
        this.paginationOptions.length = tableData.data.length;
        this.paginationOptions.pageSize = 10;
        this.paginationOptions.showPaginator = true;
        this.paginationOptions.pageSizeOptions = [10];
        this.allData = tableData.data;
        this.showTable = true;
        this.metaData = tableData.meta.columns;
        this.headerNames = tableData.meta.columns.map((item) => item.title);
      }
    });
  }
}
