import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.scss']
})
export class MainTableComponent implements OnInit {
 dataTable = null;
 columns = null;
 columnNames = null;
 isMobile = false;
 showTable = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.dataTable = data.data;
      this.columns = data.meta.columns;
      this.columnNames = this.columns.map(item => item.title);
      console.log("MainTableComponent -> ngOnInit -> this.columnNames", this.columnNames);
      this.showTable = true;
    });
  }
}
