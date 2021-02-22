import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveDetailComponent } from './archive-detail/archive-detail.component';
import { ArchiveListComponent } from './archive-list/archive-list.component';
import { InsertArchiveComponent } from './insert-archive/insert-archive.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: ArchiveListComponent },
  { path: 'create-archive', component: InsertArchiveComponent },
  { path: 'archive/:id', component: ArchiveDetailComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
