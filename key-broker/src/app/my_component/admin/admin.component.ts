import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  id: any;

  aa: boolean = false;
  propertyList1: any = []
  propertyList: any = []
  buyerList:any=[]
  lenghtOfUserList = 0
  lenghtOfProperty = 0
  lenghtOfPropertySale = 0
  lenghtOfPropertyRent = 0
  propertyForBuyerList:any=[]
  check=false


  users = [{
    id: '123',
    email: 'abc@gmail.com'
  }, {
    id: '1234',
    email: 'xyz@hotmail.com'
  }, {
    id: '12345',
    email: 'jsgsbh@kk.com'
  }, {
    id: '123456',
    email: 'test@gmail.com'
  }]

  setIndex(ii: any) {
    this.aa = ii;
    console.log
  }

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.lenghtOfUserList = 0
    this.lenghtOfProperty = 0
    this.lenghtOfPropertySale = 0
    this.lenghtOfPropertyRent = 0
    this.propertyForBuyerList=[]
    this.service.getPropertyList().subscribe(result => {

      console.log("res", result)
      this.propertyList1 = result
      this.propertyList = []
      this.lenghtOfProperty = result.length
      for (let val in result) {
        result[val].id = result[val].id.toString()
        if (result[val].category == "Sale") {
          this.lenghtOfPropertySale += 1
        }
        if (result[val].category == "Rent") {
          this.lenghtOfPropertyRent += 1
        }

        this.propertyList.push(result[val])


      }
    })
    this.service.getUserList().subscribe(res => {
      console.log(res)
      this.lenghtOfUserList = res.length
    })

    this.service.getBuyer().subscribe(res => {
      console.log("buyer",res)
      this.buyerList=res
      for(let val in this.buyerList){
        // this.propertyForBuyerList.push(this.buyerList[val][2])
        for(let val1 in this.propertyList){
          if(this.buyerList[val][2]==this.propertyList[val1].id){
            this.propertyForBuyerList.push(this.propertyList[val1])
            
          }
        }
      }
      
    })
    console.log("hello",this.propertyForBuyerList)

    console.log("abc", this.propertyList)
    console.log(this.propertyList1)
  }

  delete(id: any) {
    let id1 = parseInt(id)
    console.log(id1)
    let val = {
      "id": id1
    }
    this.service.deleteProperty(val).subscribe(result => {

      console.log("res", result)
      // this.ngOnInit()
      
    })
    this.service.deleteBuyer(val).subscribe(result => {

      console.log("res", result)
      
    })
    // this.ngOnInit()
    Swal.fire({
      icon: 'success',
      title: 'Thanks',
      text: 'Property has been deleted',
      // footer: '<a href="">Why do I have this issue?</a>'
    })
    // this.ngOnInit()
    
  }


}
