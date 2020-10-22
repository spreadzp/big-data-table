export interface ITableData {
  data: any[];
  meta: {
    columns: IColumn[];
    total: { [keyOfColumn: string]: number };
  };
}

export interface IColumn {
  type: string; //  "metric" | "entity"
  key: string;
  title: string;
  metricType?: string; // "money" | "absolute" | "relative",
  currency?: string;
}
