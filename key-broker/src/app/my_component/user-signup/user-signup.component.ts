import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  constructor(private service: SharedService, private router: ActivatedRoute, private route: Router) { }
  UserList:any=[];
  @Input() user: any;
  msg1 = "username already exist";
  msg2 = "account create successfully";
  signupdata = false;
  signupdata1 = false;
  check=false

  first_name:  any='';
  last_name:  any='';
  email:  any='';
  username:  any='';
  password:  any='';
  
  ngOnInit(): void {

    
  }

  addUser(): void {
    
    if(this.first_name=='' || this.last_name=='' || this.email=='' || this.username=='' || this.password==''){
      this.signupdata=false
    this.signupdata1=false
      this.check=true
    }
    else{
      this.check=false
      var val = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        username: this.username,
        password: this.password,
        
      };
  
      console.log(this.first_name)
      this.service.postUser(val).subscribe(res => {
      console.log(res)
      if (res == this.msg1) { 
        console.log("123")
        this.signupdata = true;
        this.signupdata1 = false;
      }
  
      else if (res == this.msg2) {
        console.log("123444444444")
        this.signupdata1 = true;
        this.signupdata = false;
      }
  
      
      
      });

    }
  
  }

}
