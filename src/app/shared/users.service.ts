import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { User } from '../user-list/user.model';
import { HttpService } from './http.service';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users = new BehaviorSubject<User[]>([]);
  selecteduser = new BehaviorSubject<User>(new User(0,"","","",""));

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers():void {
    this.http.getUsers().subscribe((users: User[]) => {
      this.users.next(users);
    }
    );
  }

  selectUser(id: string):void  {
    this.http.getUser(id).subscribe((user: User) => {
      if(!user.name){
        user = new User(-1,"","","","");
        this.selecteduser.next(user);
      }
      else{
        this.selecteduser.next(user);
      }
    });
  }

  updateUser(user: User):void  {
    this.http.updateUser(user).subscribe((user: User) => {
      this.getUsers();
    });
  }
  
  addUser(user: User):void  {
    this.http.addUser(user).subscribe((user: User) => {
      this.getUsers();
    });
  }

  deleteUser(id: string):void  {
    this.http.deleteUser(id).subscribe((user: User) => {
      this.getUsers();
    });
  }

  getLastId():void {
    this.http.getLastId().subscribe((users: User[]) => {
      this.users.next(users);
    }
    );
  }
   
}
