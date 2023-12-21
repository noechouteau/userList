import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-list/user-details/user-details.component';
import { UpdateUserComponent } from './user-list/update-user/update-user.component';
import { AddUserComponent } from './user-list/add-user/add-user.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'users' },
    { path: 'users', component: UserListComponent },
    { path: 'user/:id', component: UserDetailsComponent },
    { path: 'update/:id', component: UpdateUserComponent },
    { path: 'add', component: AddUserComponent },
    { path: 'login', component: LoginComponent },
    { path: '*', redirectTo: 'users' },
    { path: '**', redirectTo: 'users'},
    ];
