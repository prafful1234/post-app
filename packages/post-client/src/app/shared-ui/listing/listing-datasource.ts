import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { ListingService } from './listing.service';
import { map, catchError, finalize } from 'rxjs/operators';
import { BehaviorSubject, Observable, of } from 'rxjs';

export interface ListingData {
  uuid: string;
  name: string;
}

export interface ListResponse {
  docs: ListingData[];
  length: number;
  offset: number;
}
export class ListingDataSource extends DataSource<ListingData> {
  data: ListingData[];
  length: number;
  offset: number;

  itemSubject = new BehaviorSubject<ListingData[]>([]);
  loadingSubject = new BehaviorSubject<boolean>(false);

  loading$ = this.loadingSubject.asObservable();

  constructor(private model: string, private listingService: ListingService) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<ListingData[]> {
    return this.itemSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.itemSubject.complete();
    this.loadingSubject.complete();
  }

  loadItems(filter = '', pageIndex = 0, pageSize = 10) {
    this.loadingSubject.next(true);
    this.listingService
      .findModels(this.model, filter, pageIndex, pageSize)
      .pipe(
        map((res: ListResponse) => {
          console.log(res);
          this.data = res.docs;
          this.offset = res.offset;
          this.length = res.length;
          return res.docs;
        }),
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false)),
      )
      .subscribe(items => this.itemSubject.next(items));
  }
}

export const ListingColumns = {
  // here have any route_name : ['column name 1', 'column name 2']
  // these will reflect in listing,
  posts: ['id', 'userId','title'],
  default: ['uuid', 'name'],
};
