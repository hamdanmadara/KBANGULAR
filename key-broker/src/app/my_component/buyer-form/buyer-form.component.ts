import { Component,OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-buyer-form',
  templateUrl: './buyer-form.component.html',
  styleUrls: ['./buyer-form.component.css']
})
export class BuyerFormComponent implements OnInit {
  id:any;
  name:any=''
  phoneNo:any;

  constructor(private service: SharedService,private route:ActivatedRoute) {
    this.route.params.subscribe((params)=>{
      this.id=params['id']

    })
   }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.name,this.phoneNo)
    var val = {
      name:this.name,
      phoneNo: this.phoneNo,
      propertyId:this.id

    };
    this.service.postbuyer(val).subscribe((res: any) => {
      console.log("res",res)})
  }


}
