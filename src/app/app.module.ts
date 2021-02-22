import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArchiveListComponent } from './archive-list/archive-list.component';
import { InsertArchiveComponent } from './insert-archive/insert-archive.component';
import { ArchiveDetailComponent } from './archive-detail/archive-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ArchiveListComponent,
    InsertArchiveComponent,
    ArchiveDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
