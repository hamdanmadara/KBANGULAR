import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  id:any
  propertyList:any=[]
  propertyList1:any=[]

  constructor(private service: SharedService,private route:ActivatedRoute) {
    this.route.params.subscribe((params)=>{
      this.id=params['id']

    })
   }


  ngOnInit(): void {
    this.service.getPropertyList().subscribe(result => {
      console.log("res",result)
      for(let val in result){
        if(result[val].id==this.id){
          this.propertyList.push(result[val])
          
        }
      }
      this.propertyList1=this.propertyList
      console.log(this.propertyList)
      
      // this.propertyList1=this.propertyList
      // for(let val in result){
      //   console.log(result[val].price)
      // }
    
    })
  }
  

}
