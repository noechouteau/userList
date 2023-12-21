import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user-list/user.model';
import { Observable } from 'rxjs';
import { Login } from '../login/login.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = 'https://657b02c3394ca9e4af135d0a.mockapi.io/users';
  loginsUrl = 'https://657b02c3394ca9e4af135d0a.mockapi.io/logins';

  public getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseUrl);
  }

  public getUser(id: string): Observable<User> {
    return this.httpClient.get<User>(`${this.baseUrl}/${id}`);
  }

  public updateUser(user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.baseUrl}/${user.id}`, user);
  }

  public addUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.baseUrl}`, user);
  }

  public deleteUser(id: string): Observable<User> {
    return this.httpClient.delete<User>(`${this.baseUrl}/${id}`);
  }
  
  public getLastId(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseUrl}?sortBy=id&order=desc&limit=1`);
  }

  public getLogins(): Observable<Login[]> {
    return this.httpClient.get<Login[]>(this.loginsUrl);
  }
}
