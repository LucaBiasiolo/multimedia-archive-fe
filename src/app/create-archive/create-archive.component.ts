import { Component, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-archive',
  templateUrl: './create-archive.component.html',
  styleUrls: ['./create-archive.component.css']
})
export class CreateArchiveComponent implements OnInit {

  public createArchiveForm: FormGroup;

  constructor() { }

  public getFormControlName(name: string): AbstractControl{
    return this.createArchiveForm.get(name);
  }

  ngOnInit(): void {
  }

  public submitForm(): void{}

}
