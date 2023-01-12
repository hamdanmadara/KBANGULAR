import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  get_val:any
  propertyList:any=[]
  propertyList1:any=[]

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.get_val = localStorage.getItem('set_val16');
    this.get_val = JSON.parse(this.get_val)
    console.log(this.get_val)
    this.service.getPropertyList().subscribe(result => {
      console.log("res",result)
      for(let val in result){
        if(result[val].username==this.get_val.username){
          this.propertyList.push(result[val])
          this.propertyList1.push(result[val])

        }
      }
      console.log(this.propertyList)
      
      // this.propertyList1=this.propertyList
      // for(let val in result){
      //   console.log(result[val].price)
      // }
    
    })
  }

}
