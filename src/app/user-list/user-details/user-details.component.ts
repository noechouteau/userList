import { Component } from '@angular/core';
import { User } from '../user.model';
import { UsersService } from '../../shared/users.service';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';


@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [    RouterOutlet, RouterLink, RouterLinkActive, MatSnackBarModule
  ],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {

  public selectedUser: User|undefined = undefined;

  constructor(private usersService: UsersService, private activatedRoute:ActivatedRoute, private router: Router, private snackBar: MatSnackBar) { }
  
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id')?.toString();
      if(id){
        this.usersService.selectUser(id)
        this.usersService.selecteduser.subscribe((user: User) => {
          if(user.id ==-1){
            this.router.navigate(['/users']);
            this.snackBar.open('This user does not exists=', '❌', {
              horizontalPosition: 'right',
              verticalPosition: 'top',
            });
          }
          else{
            this.selectedUser = user;
          }
        }
        );
      }
      });
     
  }
}
