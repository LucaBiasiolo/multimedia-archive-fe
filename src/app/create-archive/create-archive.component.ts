import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-archive',
  styleUrls: ['./create-archive.component.css'],
  templateUrl: './create-archive.component.html',
})
export class CreateArchiveComponent implements OnInit {

  public createArchiveForm: FormGroup;

  constructor() { }

  public getFormControlName(name: string): AbstractControl {
    return this.createArchiveForm.get(name);
  }

  public ngOnInit(): void {
  }

  public submitForm(): void {}

}
