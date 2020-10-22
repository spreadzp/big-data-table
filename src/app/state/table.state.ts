import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { ITableData } from '../shared/interfaces/table-data.interface';
import { GetNewDataTable } from './table.action';
import { DataService } from '../services/data.service';

interface TableModel {
  tableData: ITableData;
}

@State<TableModel>({
  name: 'TableState',
  defaults: { tableData: {} as ITableData }
})
@Injectable()
export class TableState {
  /**
   * we can inject dependencies as in services or components,
   * but we can't use they for static methods
   */
  constructor(private dataService: DataService) {}

  /**
   * we can give a part of state through clean function,
   * in current case we give away article title or status message
   */
  @Selector()
  static getLastData(state: TableModel): any[] {
    if ( !state.tableData) {
      return [];
    }

    return state.tableData.data;
  }


  /**
   * Typical case to use API request through NGXS Action.
   * It is very important return Observable to method.
   * NGXS subscribe to Observable himself and doing Action async.
   * This very help developer receiving statuses API requests, without adding extra entities in State
   */
  @Action(GetNewDataTable)
  loadPrice(ctx: StateContext<TableModel>, { newData }: GetNewDataTable) {
    const state = ctx.getState();
    this.dataService.getData().subscribe
    (
      (tableData: ITableData) => {
        ctx.setState({ tableData });
      }
    );
  }
}
