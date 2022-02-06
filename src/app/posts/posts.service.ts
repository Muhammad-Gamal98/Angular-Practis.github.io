import { Observable, catchError, throwError } from 'rxjs';
import { Iposts } from './../Shared Classes and types/Interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}
  _url: string = 'https://jsonplaceholder.typicode.com/posts';
  getPosts():Observable<Iposts[]> {
    return this.http.get<Iposts[]>(this._url)
      .pipe(catchError(err => {
        return throwError(()=>{err.message || "An Error Occures"})
      }))
  }
}
