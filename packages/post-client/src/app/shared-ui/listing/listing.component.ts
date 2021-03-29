import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ListingColumns, ListingDataSource } from './listing-datasource';
import { ListingService } from './listing.service';
import { filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { LIST } from '../../constants/storage';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
})
export class ListingComponent {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  dataSource: ListingDataSource;

  displayedColumns = ['uuid', 'name'];
  model: string;
  search: string = '';

  constructor(private listingService: ListingService, private router: Router) {
    this.router.events
      .pipe(filter(route => route instanceof NavigationEnd))
      .subscribe((route: NavigationEnd) => {
        // https://[url]/list/[model]
        if (!route.url.split('/').includes(LIST)) return;
        this.model = route.url.split('/')[2];
        this.displayedColumns =
          ListingColumns[this.model] || ListingColumns.default;
        this.loadItems();
      });
  }

  ngOnInit() {}

  loadItems() {
    this.dataSource = new ListingDataSource(this.model, this.listingService);
    this.dataSource.loadItems();
  }

  getUpdate(event) {
    this.dataSource.loadItems(this.search, event.pageIndex, event.pageSize);
  }

  setFilter() {
    this.dataSource.loadItems(
      this.search,
      this.paginator.pageIndex,
      this.paginator.pageSize,
    );
  }

  snakeToTitleCase(string: string) {
    if (!string) return;

    return string
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
