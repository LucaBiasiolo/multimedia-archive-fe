import { Injectable } from '@angular/core';
import { Archive } from './archive-list/archive-list.component';

@Injectable({
  providedIn: 'root'
})
export class ArchiveService {

  private archivesArray: Array<Archive> = [{ id: 1, name: 'prova', path: 'prova'}];

  constructor() { }

  public get archives(): Array<Archive>{
    return this.archivesArray;
  }

}
