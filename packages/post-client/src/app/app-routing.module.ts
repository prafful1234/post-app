import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './shared-ui/listing/listing.component';
import { HomeComponent } from './shared-ui/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'list/:model',
    component: ListingComponent,
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
