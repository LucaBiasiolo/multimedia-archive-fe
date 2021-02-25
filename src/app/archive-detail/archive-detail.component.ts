import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IArchive } from '../core/multimedia-archive-fe.interfaces';
import { ArchiveService } from '../core/services/archive.service';

@Component({
  selector: 'app-archive-detail',
  styleUrls: ['./archive-detail.component.scss'],
  templateUrl: './archive-detail.component.html',
})
export class ArchiveDetailComponent implements OnInit {

  public archive: IArchive = null;

  constructor(private activatedRoute: ActivatedRoute, private archiveService: ArchiveService) {
    this.activatedRoute.params.subscribe( (params: Params): void => {
      const id: number = Number(params.id);
      this.archiveService.getArchiveById(id).subscribe( (archive: IArchive): void => {
        this.archive = archive;
      });
    });
  }

  public ngOnInit(): void {
  }
}
