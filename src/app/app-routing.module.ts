import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveDetailComponent } from './archive-detail/archive-detail.component';
import { ArchiveListComponent } from './archive-list/archive-list.component';
import { CreateArchiveComponent } from './create-archive/create-archive.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: ArchiveListComponent },
  { path: 'create-archive', component: CreateArchiveComponent },
  { path: 'archive/:id', component: ArchiveDetailComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
