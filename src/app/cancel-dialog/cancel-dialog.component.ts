import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cancel-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './cancel-dialog.component.html',
  styleUrl: './cancel-dialog.component.css'
})
export class CancelDialogComponent {

}
