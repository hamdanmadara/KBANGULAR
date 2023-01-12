import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  select1:any="any"
  propertyList:any=[]
  propertyList1:any=[]
  listForArea:any=[]
  countGulshan=0
  countSaddar=0
  countWaterPump=0
  countMalir=0
  countJohr=0

  constructor(private service: SharedService,private route:ActivatedRoute) {
    this.route.params.subscribe((params)=>{

    })
   }

  ngOnInit(): void {
    
    this.service.getPropertyList().subscribe(result => {
      console.log("res",result)
      for(let val in result){
        if(result[val].category=="Sale"){
          this.propertyList.push(result[val])
          this.propertyList1.push(result[val])

        }
        if(result[val].area=="Gulshan" && result[val].category=="Sale"){
          this.countGulshan+=1
        }
        if(result[val].area=="Saddar" && result[val].category=="Sale"){
          this.countSaddar+=1
        }
        if(result[val].area=="Water Pump" && result[val].category=="Sale"){
          this.countWaterPump+=1
        }
        if(result[val].area=="Malir" && result[val].category=="Sale"){
          this.countMalir+=1
        }
        if(result[val].area=="Johr" && result[val].category=="Sale"){
          this.countJohr+=1
        }
      }
      console.log(this.propertyList)
      
      // this.propertyList1=this.propertyList
      // for(let val in result){
      //   console.log(result[val].price)
      // }
    
    })
      
     
      
  }
  test(val:any){
    this.propertyList=this.propertyList1
    this.select1=val.target.value
    // this.ngOnInit()
    this.listForArea=[]
    console.log(val.target.value)
    
    for(let val1 in this.propertyList){
      if(this.propertyList[val1].area==this.select1){
        this.listForArea.push(this.propertyList[val1])
      }
    }
    
    this.propertyList=this.listForArea


  }
  getUserData(){
    switch(this.select1){
      case this.select1:{
      console.log(this.select1)}
    }
  }

}
