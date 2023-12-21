import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from './http.service';
import { Login } from '../login/login.model';


@Injectable({
  providedIn: 'root'
})
export class LoginsService {
  logins = new BehaviorSubject<Login[]>([]);

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.getLogins();
  }

  getLogins():void {
    this.http.getLogins().subscribe((logins: Login[]) => {
      this.logins.next(logins);
    }
    );
  }

  checkLogin(login: string, password: string):boolean {
    let logins = this.logins.getValue();
    let loginFound = false;
    logins.forEach(element => {
      if(element.login == login && element.password == password){
        loginFound = true;
      }
    });
    return loginFound;
  }
   
}
