import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, ViewChild } from '@angular/core';
import {User} from './user.model';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import { Observable, of } from 'rxjs';
import {MatButtonModule} from '@angular/material/button';
import { UsersService } from '../shared/users.service';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatSortModule,MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { CancelDialogComponent } from '../cancel-dialog/cancel-dialog.component';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  standalone:true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    RouterOutlet, RouterLink, RouterLinkActive,
    MatSortModule,
    MatSnackBarModule,
   ],
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements AfterViewInit {

  users :User[] = []

  displayedColumns = ['avatar','name','email','occupation', 'actions'];
  dataSource = new MatTableDataSource<User>(this.users);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private usersService: UsersService, public dialog: MatDialog, private router: Router, private snackBar: MatSnackBar) { }


  ngOnInit() {
    this.usersService.ngOnInit()
    this.usersService.users.subscribe((users: User[]) => {
      this.users = users;
      this.dataSource = new MatTableDataSource<User>(this.users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onDeleteClick(id: string) {
    this.openCancelDialog(id)
  }

  onCopyClick(user: User) {
    const newUser = new User(user.id, user.name, user.occupation, user.email, user.bio, user.avatar)
    this.usersService.addUser(newUser);
    this.snackBar.open('Copy successful !', '✔️', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  openCancelDialog(id:string) {
    const dialogRef = this.dialog.open(CancelDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.usersService.deleteUser(id)
        this.snackBar.open('Delete successful !', '✔️', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    //prevent filter on avatar column
    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return data.name.toLowerCase().includes(filter) || data.email.toLowerCase().includes(filter) || data.occupation.toLowerCase().includes(filter);
    };
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource)

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  exportToCSV() {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Name,Email,Occupation,Bio\n"
    this.users.forEach((user) => {
      csvContent += user.name + "," + user.email + "," + user.occupation + "," + user.bio + "\n"
    })
    const encodedUri = encodeURI(csvContent);
    let link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "my_data.csv");
    document.body.appendChild(link); // Required for FF

    link.click();
    
  }

  disconnectClick() {
    localStorage.removeItem('login');
    this.router.navigate(['/login']);
  }


}
