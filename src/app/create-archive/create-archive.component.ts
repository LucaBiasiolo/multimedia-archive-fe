import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { IArchive } from '../core/multimedia-archive-fe.interfaces';
import { ArchiveService } from '../core/services/archive.service';

@Component({
  selector: 'app-create-archive',
  styleUrls: ['./create-archive.component.scss'],
  templateUrl: './create-archive.component.html',
})
export class CreateArchiveComponent implements OnInit {

  public createArchiveForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private archiveService: ArchiveService, private snackBar: MatSnackBar) { }

  public getFormControlName(name: string): AbstractControl {
    return this.createArchiveForm.get(name);
  }

  public ngOnInit(): void {
    this.createArchiveForm = this.formBuilder.group({
      name: ['', Validators.required],
      path: ['', Validators.required]
    });
  }

  public submitForm(): void {
    const newArchive: IArchive = this.createArchiveForm.value;
    this.archiveService.createArchive(newArchive).subscribe( (addedArchive: IArchive) => {
      if (addedArchive) {
        this.snackBar.open('Archivio creato correttamente');
      } else {
        this.snackBar.open('Errore durante la creazione dell\'archivio', '', { panelClass: 'magazzino-alert'});
      }
    });
  }
}
