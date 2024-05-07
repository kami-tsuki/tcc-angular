export interface Table {
  Header: Column[];
  Rows: Row[];
  Data:  any;
}

export interface Column {
  name: string;
  type: "string" | "number" | "date" | "boolean";
  format?: string;
  width?: number;
  align?: "left" | "center" | "right";
  display?: boolean;
  sort?: boolean;
  ID: number;
}

export interface Row {
  Cells: Cell[];
  DataID: number;
  Visible: boolean;
}

export interface Cell {
  Value?: string | number | Date | boolean;
  Type: "string" | "number" | "date" | "boolean";
  ColumnID: number;
  ReadOnly: boolean;
}
