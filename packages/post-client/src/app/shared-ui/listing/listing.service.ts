import { Injectable } from '@angular/core';
import { API_PREFIX } from '../../constants/storage';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ListingService {
  constructor(private http: HttpClient) {}

  findModels(model: string, filter = '', pageNumber = 0, pageSize = 10) {
    const url = `/${API_PREFIX}/${model}`;
    const params = new HttpParams()
      .set('limit', pageSize.toString())
      .set('offset', (pageNumber * pageSize).toString())
      .set('search', filter);
    return this.http.get(url, { params });
  }
}
