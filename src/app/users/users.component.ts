import { UsersService } from './users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private UsersService:UsersService) { }

  userList: any;
  errorMsg: any;
  ngOnInit(): void {
    this.UsersService.getUsers().subscribe(data => {
      this.userList = data;
    },
      errorData => {
        this.errorMsg = errorData;
      }
      )
  }

}
