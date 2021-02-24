import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IArchive, IMultimediaArchiveAPIResponse } from '../multimedia-archive-fe.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ArchiveService {

  private archivesArray: Array<IArchive> = [{ id: 1, name: 'Archivio prova 1', path: 'prova 1'}];
  private archivesURL: string = 'http://localhost:8080/multimedia-archive-be/be/archives';

  constructor(private http: HttpClient) { }

  public get archives(): Observable<IArchive[]> {
    return this.http.get(this.archivesURL).pipe(
      map( (body: IMultimediaArchiveAPIResponse): Array<IArchive> => {
        return body.response;
      })
    );
  }

  public createArchive(newArchive: IArchive): boolean {
    newArchive.id = this.archivesArray.length + 1;
    return this.archivesArray.push(newArchive) ? true : false;
  }

  public getArchiveById(id: number): IArchive {
    // TODO: Da implementare
    return null;
  }
}
