import { Component } from '@angular/core';
import { User } from '../user.model';
import { UsersService } from '../../shared/users.service';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [    RouterOutlet, RouterLink, RouterLinkActive, MatInputModule, NgIf, FormsModule
  ],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent {

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
          if(!user.name){
            console.log("nop")
          }
          this.selectedUser = user;
          this.newName = this.selectedUser.name
          this.newEmail = this.selectedUser.email
          this.newOccupation = this.selectedUser.occupation
          this.newBio = this.selectedUser.bio
          this.newAvatar = this.selectedUser.avatar
          console.log(this.selectedUser)
        },
        );
      }
      });
     
  }

  onSubmit() {
      this.checkIfImageExists(this.newAvatar, (exists: any) => {
        if(this.selectedUser){
        if (!exists) {
          this.newAvatar = "https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-avatar-vector-isolated-on-white-background-png-image_1694546.jpg";
          const newuser = new User(this.selectedUser.id, this.newName, this.newOccupation, this.newEmail, this.newBio, this.newAvatar)
          this.usersService.updateUser(newuser);
          this.router.navigate(['/users']);
        }
        else{
          const newuser = new User(this.selectedUser.id, this.newName,  this.newOccupation,this.newEmail, this.newBio, this.newAvatar? this.newAvatar:undefined)
          this.usersService.updateUser(newuser);
          this.router.navigate(['/users']);
        }
      }})
    
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
