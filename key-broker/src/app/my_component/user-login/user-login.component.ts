import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private service: SharedService, private route: ActivatedRoute, private router: Router) { }
  UserList: any = [];
  @Input() userlogin: any;
  msg1 = "proceed";
  msg2 = "Wrong Credentials";
  logindata = false;
  get_val: any;
  // a=[];

  username :any='';
  password:any='';
  msg: string | any
  check=false
  ngOnInit(): void {

    localStorage.setItem('Angular5', JSON.stringify([]));
    localStorage.setItem('set_val16', JSON.stringify(null));
    console.log("000000")
    console.log(localStorage.getItem('set_val16'))
    console.log("00000000")
    if (this.get_val == null) {
      console.log(0)
    }
    // let myCompOneObj = new NavbarComponent(this.service, this.route, this.router);

    // myCompOneObj.ngOnInit();



  }

  loginUser(): void {
    if(this.username=='' || this.password==''){
      
      this.check=true
      this.logindata = false;
    }
    else{
      this.check=false
      console.log("jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj")
      var val = {
        username: this.username,
        password: this.password,
      };
      // console.log(this.username)
      this.service.postUser(val).subscribe(res => {
        console.log("res",res)
        if (res == this.msg1) {
          console.log("proceed")
          this.router.navigate(['/property']).then(() => {
            window.location.reload();
          });
          localStorage.setItem('set_val16', JSON.stringify(val));
          console.log(res)
          this.get_val = localStorage.getItem('set_val16');
          this.get_val = JSON.parse(this.get_val)
  
        }
  
        else if (res == this.msg2) {
          console.log("123444444444")
          this.logindata = true;
        }
  
      });

    }

  }

}
