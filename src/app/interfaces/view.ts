export interface View {
  Options: Options;
  Messages: Message[];
}

export interface Options {
}

export interface Message {
  Title: string;
  Description: string;
  Type: "Success" | "Error" | "Warning" | "Info";
}
