import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IArchive, IMultimediaArchiveAPIResponse } from '../multimedia-archive-fe.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ArchiveService {

  private archivesURL: string = 'http://localhost:8080/multimedia-archive-be/be/archives';

  constructor(private http: HttpClient) { }

  public get archives(): Observable<IArchive[]> {
    return this.http.get(this.archivesURL).pipe(
      map( (body: IMultimediaArchiveAPIResponse): Array<IArchive> => {
        return body.response;
      })
    );
  }

  public createArchive(newArchive: IArchive): Observable<IArchive> {
    return this.http.post(this.archivesURL, newArchive).pipe(
      map( (body: IMultimediaArchiveAPIResponse): IArchive => {
        return body.response;
      })
    );
  }

  public getArchiveById(id: number): Observable<IArchive> {
    return this.http.get(`${this.archivesURL}/${id}`).pipe(
      map( (body: IMultimediaArchiveAPIResponse): IArchive => {
        return body.response;
      })
    );
  }
}
