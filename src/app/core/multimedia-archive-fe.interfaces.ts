export interface IArchive {
  id: number;
  name: string;
  path: string;
}

export interface IMultimediaArchiveAPIResponse {
  status: string;
  response: any;
  messages: Array<string>;
}
