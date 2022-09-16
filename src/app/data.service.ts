import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {DataResponse} from './home/users';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() : Observable<DataResponse>{
    return this.http.get<DataResponse>('https://reqres.in/api/users');
  }

  firstClick() {
    return console.log('clicked');
  }
}
