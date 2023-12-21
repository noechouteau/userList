import { Component } from '@angular/core';
import { User } from '../user.model';
import { UsersService } from '../../shared/users.service';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [    RouterOutlet, RouterLink, RouterLinkActive, MatInputModule, NgIf, FormsModule
  ],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {

  public selectedUser: User|undefined = undefined;

  public newName: string = "";
  public newEmail: string = "";
  public newOccupation: string = "";
  public newBio : string = "";
  public newAvatar: string = "";

  constructor(private usersService: UsersService, private activatedRoute:ActivatedRoute, private router: Router) { }  
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id')?.toString();
      if(id){
        this.usersService.selectUser(id)
        this.usersService.selecteduser.subscribe((user: User) => {
          this.selectedUser = user;
          console.log(this.selectedUser)
        }
        );
      }
      });
     
  }

  onSubmit() {
    console.log("sbmited")
    if(this.newName && this.newEmail && this.newOccupation && this.newBio){
      let newId = 0
      this.usersService.getLastId()
      this.usersService.users.subscribe((users: User[]) => {
        console.log(users[0])
        newId = users[0].id + 1

      }
      )

      this.checkIfImageExists(this.newAvatar, (exists: any) => {
        if (!exists) {
          this.newAvatar = "https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-avatar-vector-isolated-on-white-background-png-image_1694546.jpg";

          const newuser = new User(newId, this.newName,  this.newOccupation,this.newEmail, this.newBio, this.newAvatar? this.newAvatar:undefined)
          console.log(newuser)
          this.usersService.addUser(newuser);
          this.router.navigate(['/users']);
        }
        else{
          const newuser = new User(newId, this.newName, this.newOccupation,this.newEmail, this.newBio, this.newAvatar? this.newAvatar:undefined)
          this.usersService.addUser(newuser);
          this.router.navigate(['/users']);
        }
      });
      


    } 
    else {
      alert("Please fill all the fields")
    }
  }

  checkIfImageExists(url: string, callback: any) {
    const img = new Image();
    img.src = url;
    
    if (img.complete) {
      callback(true);
    } else {
      img.onload = () => {
        callback(true);
      };
      
      img.onerror = () => {
        callback(false);
      };
    }
  }
  
  
}
