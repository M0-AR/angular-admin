import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  endpoint = `${environment.api}/users`

  constructor(private http: HttpClient) { }

  all(page: number): Observable<any> {
    return this.http.get<any>(`${this.endpoint}?page=${page}`);
  }

  create(data: any): Observable<User> {
    return this.http.post<User>(this.endpoint, data);
  }

  get(id: number): Observable<User> {
    return this.http.get<User>(`${this.endpoint}/${id}`);
  }

  update(id: number, data: User): Observable<User> {
    return this.http.put<User>(`${this.endpoint}/${id}`, data)
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.endpoint}/${id}`)
  }
}
