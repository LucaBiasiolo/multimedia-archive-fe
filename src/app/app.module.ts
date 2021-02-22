import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArchiveListComponent } from './archive-list/archive-list.component';
import { CreateArchiveComponent } from './create-archive/create-archive.component';
import { ArchiveDetailComponent } from './archive-detail/archive-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ArchiveListComponent,
    CreateArchiveComponent,
    ArchiveDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
