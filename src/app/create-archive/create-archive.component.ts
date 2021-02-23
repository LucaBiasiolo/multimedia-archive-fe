import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-archive',
  styleUrls: ['./create-archive.component.css'],
  templateUrl: './create-archive.component.html',
})
export class CreateArchiveComponent implements OnInit {

  public createArchiveForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  public getFormControlName(name: string): AbstractControl {
    return this.createArchiveForm.get(name);
  }

  public ngOnInit(): void {
    this.createArchiveForm = this.formBuilder.group({
      name: ['', Validators.required],
      path: ['', Validators.required]
    });
  }

  public submitForm(): void {}

}
