import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { User, Mutation } from '../../types';
import { UserService } from '../../user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 @Input() email: string;
 @Input() password: string;
 @Input() firstName: string;
 @Input() lastName: string;


  constructor(private userService: UserService) { }

  onRegisterSubmit(){
    console.log("form submitted!");
    this.userService.registerUser(this.email, this.password, this.firstName, this.lastName)
      .subscribe(({ data }) => {
        console.log('got data', data);
      }, (error) => {
        console.log('error getting data response', error);
      });
  }

  ngOnInit() {
      
  }

}
