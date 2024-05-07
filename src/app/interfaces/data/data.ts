import {Address} from "./address";

export interface Data {
  Destination: Address | string;
  Origin: Address | string;
  Date: Date;
  DriverID: number;
  VehicleID: number;
  Status: string;
  Enabled: boolean;
  ID?: number;
  DocumentID: number;
  Reason: string;
}
