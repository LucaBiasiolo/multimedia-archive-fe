import { Component, OnInit } from '@angular/core';
import { ArchiveService } from '../archive.service';
import { Archive } from '../multimedia-archive-fe.interfaces';

@Component({
  selector: 'app-archive-list',
  templateUrl: './archive-list.component.html',
  styleUrls: ['./archive-list.component.css']
})
export class ArchiveListComponent implements OnInit {

  constructor(private archiveService: ArchiveService) { }

  ngOnInit(): void {
  }

  public get archives(): Array<Archive> {
    return this.archiveService.archives;
  }
}
