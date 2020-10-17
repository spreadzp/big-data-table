import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { IPaginator } from '../../shared/interfaces/paginator.interface';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.scss']
})
export class BaseTableComponent implements OnInit {
  dataTable = null;
  columns = null;
  columnNames = null;
  isMobile = false;
  showTable = false;
  length = 0;
  pageSize = 10;
  pageSizeOptions = [10];
  pageEvent: PageEvent;
  activePageDataChunk = [];
  @Input() allData = {} as any;
  @Input() paginationOptions: IPaginator;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    console.log("BaseTableComponent -> ngOnInit -> this.allData", this.allData)
    if (this.allData) {

      this.dataTable = this.allData.data;
      this.length = this.dataTable.length;
      this.columns = this.allData?.meta.columns;
      this.columnNames = this.columns.map((item) => item.title);
      this.activePageDataChunk = this.dataTable.slice(0, this.pageSize);
      this.showTable = this.length > 0;
    }


  }

  onPageChanged(e) {
    if (this.length > 0) {
      const firstCut = e.pageIndex * e.pageSize;
      const secondCut = firstCut + e.pageSize;
      this.activePageDataChunk = this.dataTable.slice(firstCut, secondCut);
    }
  }

  combineMetric(rowData: any[], index: number) {
    return (this.columns[index].type === 'metric' && this.columns[index].metricType === 'money')
      ? `${rowData[index]} ${this.columns[index].currency}`
      : rowData[index];
  }

}


