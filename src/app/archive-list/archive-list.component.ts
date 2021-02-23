import { Component, OnInit } from '@angular/core';
import { ArchiveService } from '../core/services/archive.service';
import { IArchive } from '../core/multimedia-archive-fe.interfaces';

@Component({
  selector: 'app-archive-list',
  styleUrls: ['./archive-list.component.css'],
  templateUrl: './archive-list.component.html',
})
export class ArchiveListComponent implements OnInit {

  public archives: Array<IArchive>;

  constructor(private archiveService: ArchiveService) {
    this.archives = this.archiveService.archives;
  }

  public ngOnInit(): void {
  }
}
