import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.scss'],
})
export class MainTableComponent implements OnInit {
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

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.dataTable = data.data;
      this.length = this.dataTable.length;
      this.columns = data.meta.columns;
      this.columnNames = this.columns.map((item) => item.title);
      this.activePageDataChunk = this.dataTable.slice(0, this.pageSize);
      this.showTable = this.length > 0;
    });
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
