import { Component, Input, OnInit } from '@angular/core';
import { IPaginator } from '../../shared/interfaces/paginator.interface';

@Component({
  selector: 'app-base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.scss']
})
export class BaseTableComponent implements OnInit {
  dataTable = null;
  columns = null;
  isMobile = false;
  showTable = false;
  length = 0;
  activePageDataChunk = null;

  @Input() allData = null;
  @Input() paginationOptions: IPaginator;
  @Input() metaData = {} as any;
  @Input() columnNames = null;

  constructor() { }

  ngOnInit(): void {
    if (this.allData && this.allData.length > 0) {
      this.dataTable = this.allData;
      this.length = this.dataTable.length;
      this.activePageDataChunk = this.allData.slice(0, this.paginationOptions.pageSize);
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
    return (this.metaData[index].type === 'metric' && this.metaData[index].metricType === 'money')
      ? `${rowData[index]} ${this.metaData[index].currency}`
      : rowData[index];
  }

}
