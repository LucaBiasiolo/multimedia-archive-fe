import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IArchive } from '../core/multimedia-archive-fe.interfaces';
import { ArchiveService } from '../core/services/archive.service';

@Component({
  selector: 'app-archive-detail',
  styleUrls: ['./archive-detail.component.css'],
  templateUrl: './archive-detail.component.html',
})
export class ArchiveDetailComponent implements OnInit {

  public archive: IArchive;

  constructor(private activatedRoute: ActivatedRoute, private archiveService: ArchiveService) {
    this.activatedRoute.params.subscribe( (params: Params): void => {
      const id: number = Number(params.id);
      this.archive = this.archiveService.getArchiveById(id);
    });
  }

  public ngOnInit(): void {
  }

}
