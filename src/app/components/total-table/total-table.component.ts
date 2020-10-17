import { Component, OnInit } from '@angular/core';
import { IPaginator } from '../../shared/interfaces/paginator.interface';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-total-table',
  templateUrl: './total-table.component.html',
  styleUrls: ['./total-table.component.scss']
})
export class TotalTableComponent implements OnInit {
  allData = null;
  paginationOptions = {} as IPaginator;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.allData = data;
      this.paginationOptions.showPaginator = false;
    });
  }
}
