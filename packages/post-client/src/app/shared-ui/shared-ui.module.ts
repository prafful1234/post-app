import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ListingComponent } from './listing/listing.component';
import { ListingService } from './listing/listing.service';
import { NavigationComponent } from './navigation/navigation.component';
import { SharedImportsModule } from '../shared-imports/shared-imports.module';

@NgModule({
  declarations: [HomeComponent, ListingComponent, NavigationComponent],
  imports: [SharedImportsModule, CommonModule],
  providers: [ListingService],
  exports: [HomeComponent, ListingComponent, NavigationComponent],
})
export class SharedUIModule {}
