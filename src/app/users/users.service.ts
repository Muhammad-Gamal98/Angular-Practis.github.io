import { Iusers } from './../Shared Classes and types/Interface';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}
  _url: string = 'https://jsonplaceholder.typicode.com/users';
  getUsers():Observable<Iusers[]> {
    return this.http.get<Iusers[]>(this._url)
      .pipe(catchError((err)=> {
      return throwError(()=>err.message|| "An Error Occured")
      
    }))
  }
}
