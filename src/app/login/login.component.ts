import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { LoginsService } from '../shared/login.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [    MatInputModule, FormsModule, MatSnackBarModule, RouterOutlet, RouterLink, RouterLinkActive,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public username: string = "";
  public password: string = "";
  public logged = false;

  constructor(private router: Router, private loginsService: LoginsService, private snackBar: MatSnackBar) { }
  ngOnInit() {
    if(localStorage.getItem("login")){
      this.logged = true;
    }
    this.loginsService.ngOnInit()

  }

  onSubmit() {
    if(this.username == "" || this.password == ""){
      this.snackBar.open('Please enter a login and a password', '❌', {
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
    }
    else if(this.loginsService.checkLogin(this.username, this.password)){
        localStorage.setItem("login", this.username);
        this.router.navigate(['/users']);
        this.snackBar.open('Welcome ' + this.username + ' !', '✔️', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration: 2000
        });
      }
    else{
      this.snackBar.open('Wrong login or password', '❌', {
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
    }
  }
}
