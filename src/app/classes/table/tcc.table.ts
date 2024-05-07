import {Cell, Column, Row, Table} from "../../interfaces/table/table";
import {Data} from "../../interfaces/data/data";

export class TccTable implements Table {
  public Header: Column[];
  public Rows: Row[];
  public Data: Data[];

  constructor(Data: Data[]) {
    this.Data = Data as Data[];

    this.Header = [
      {name: "ID", type: "number", display: true, sort: false, align: "center", ID: 1},
      {name: "Destination", type: "string", display: true, sort: false, align: "center", ID: 2},
      {name: "Origin", type: "string", display: true, sort: false, align: "center", ID: 3},
      {name: "Date", type: "date", display: true, sort: false, align: "center", ID: 4},
      {name: "VehicleID", type: "number", display: false, sort: false, align: "center", ID: 5},
      {name: "DriverID", type: "number", display: false, sort: false, align: "center", ID: 6},
      {name: "VehicleId", type: "number", display: false, sort: false, align: "center", ID: 7},
      {name: "DocumentID", type: "number", display: false, sort: false, align: "center", ID: 8},
      {name: "Reason", type: "string", display: true, sort: false, align: "center", ID: 9}
    ];

    this.Rows = this.Data.map((data: Data) => ({
      DataID: data.ID,
      Cells: [
        {ColumnID: 1, Value: data.ID, ReadOnly: true, Type: "number"},
        {ColumnID: 2, Value: data.Destination.toString(), ReadOnly: true, Type: "string"},
        {ColumnID: 3, Value: data.Origin.toString(), ReadOnly: true, Type: "string"},
        {ColumnID: 4, Value: data.Date, ReadOnly: true, Type: "date"},
        {ColumnID: 5, Value: data.VehicleID, ReadOnly: true, Type: "number"},
        {ColumnID: 6, Value: data.DriverID, ReadOnly: true, Type: "number"},
        {ColumnID: 7, Value: data.VehicleID, ReadOnly: true, Type: "number"},
        {ColumnID: 8, Value: data.DocumentID, ReadOnly: true, Type: "number"},
        {ColumnID: 9, Value: data.Reason, ReadOnly: true, Type: "string"}
      ] as Cell[] ,
      Visible: true
    } as Row))
  }
}
