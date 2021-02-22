import { Component, OnInit } from '@angular/core';

export interface Archive{
  id: number;
  name: string;
  path: string;
}

@Component({
  selector: 'app-archive-list',
  templateUrl: './archive-list.component.html',
  styleUrls: ['./archive-list.component.css']
})
export class ArchiveListComponent implements OnInit {

  public archives: Array<Archive> = [{ id: 1, name: 'prova', path: 'prova'}];

  constructor() { }

  ngOnInit(): void {
  }

}
