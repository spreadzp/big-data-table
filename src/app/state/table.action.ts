import { ITableData } from '../shared/interfaces/table-data.interface';

export class GetNewDataTable {
  static readonly type = '[Data Table] New Data Table';
  constructor(public newData: ITableData) {}
}
