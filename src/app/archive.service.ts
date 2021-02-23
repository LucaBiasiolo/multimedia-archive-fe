import { Injectable } from '@angular/core';
import { IArchive } from './multimedia-archive-fe.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ArchiveService {

  private archivesArray: Array<IArchive> = [{ id: 1, name: 'prova', path: 'prova'}];

  constructor() { }

  public get archives(): Array<IArchive> {
    return this.archivesArray;
  }

}
