import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PREFIX } from '../../../constants/storage';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private readonly http: HttpClient) {}

  getOne(id: string) {
    return this.http.get(`${API_PREFIX}/posts/${id}`);
  }

  setStorageItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getStorageItem(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

  removeStorageItem(key: string) {
    localStorage.removeItem(key);
  }
}
