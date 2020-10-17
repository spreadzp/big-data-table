import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { IPaginator } from '../../shared/interfaces/paginator.interface';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.scss'],
})
export class MainTableComponent implements OnInit {
  allData = null;
  paginationOptions = {} as IPaginator;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.allData = data;
      this.paginationOptions.length = data.data.length;
      this.paginationOptions.pageSize = 10;
      this.paginationOptions.showPaginator = true;
      this.paginationOptions.pageSizeOptions = [10];
    });
  }

}
