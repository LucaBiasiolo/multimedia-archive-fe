import { Injectable } from '@angular/core';
import { IArchive } from '../multimedia-archive-fe.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ArchiveService {

  private archivesArray: Array<IArchive> = [{ id: 1, name: 'Archivio prova 1', path: 'prova 1'}];

  constructor() { }

  public get archives(): Array<IArchive> {
    return this.archivesArray;
  }

  public createArchive(newArchive: IArchive): void {
    newArchive.id = this.archivesArray.length + 1;
    this.archivesArray.push(newArchive);
  }

  public getArchiveById(id: number): IArchive {
    return this.archivesArray.find( (archive: IArchive): boolean => archive.id === id);
  }
}
