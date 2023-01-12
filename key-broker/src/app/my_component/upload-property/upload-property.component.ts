import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-upload-property',
  templateUrl: './upload-property.component.html',
  styleUrls: ['./upload-property.component.css']
})
export class UploadPropertyComponent implements OnInit {
  get_val: any
  get_val1: any

  constructor(private service: SharedService) { }


  //
  fullName: any = ''
  propertyName: any = ''
  address: any = ''
  detail: any = ''
  size: any = ''
  room: any = ''
  price: any = ''
  phoneNo: any = ''
  areaName: any = ''
  categoryName: any = null
  username:any
  check = false
  selectedImage1:any=''
  selectedImage2:any=''
  selectedImage3:any=''
  selectedImage4:any=''


  //
  url1 = "./assets/images/"
  url2 = "./assets/images/homeimage.jpg"
  url3 = "./assets/images/homeimage.jpg"
  url4 = "./assets/images/homeimage.jpg"
  list1: any = []
  imageUrl1: any
  list2: any = []
  imageUrl2: any
  list3: any = []
  imageUrl3: any
  list4: any = []
  imageUrl4: any
  
  ngOnInit(): void {
  

    this.get_val = localStorage.getItem('set_val16');
    this.get_val = JSON.parse(this.get_val)
    console.log(this.get_val)
    this.username=this.get_val.username


    this.get_val1 = localStorage.getItem('url');
          this.get_val1 = JSON.parse(this.get_val1)
          console.log(this.get_val1)

  }

  onselectFile1(e: any) {
    if (e.target.files) {
      var reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      this.selectedImage1=e.target.files[0].name
      reader.onload = (event: any) => {
        this.url1 = event.target.result
        this.list1.push(this.url1)
        this.imageUrl1 = this.url1
        console.log(this.imageUrl1)

      }

    }

  }
  onselectFile2(e: any) {
    if (e.target.files) {
      var reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      this.selectedImage2=e.target.files[0].name
      reader.onload = (event: any) => {
        this.url2 = event.target.result
        this.list2.push(this.url2)
        this.imageUrl2 = this.url2
        console.log(this.imageUrl2)
      }

    }

  }
  onselectFile3(e: any) {
    if (e.target.files) {
      var reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      this.selectedImage3=e.target.files[0].name
      reader.onload = (event: any) => {
        this.url3 = event.target.result
        this.list3.push(this.url3)
        this.imageUrl3 = this.url3
        console.log(this.imageUrl3)
      }

    }

  }
  onselectFile4(e: any) {
    if (e.target.files) {
      var reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      this.selectedImage4=e.target.files[0].name
      reader.onload = (event: any) => {
        this.url4 = event.target.result
        this.list4.push(this.url4)
        this.imageUrl4 = this.url4
        console.log(this.imageUrl4)
      }

    }

  }
  submit(crteam: any): void {
    console.log('val')
    if (this.fullName == '' || this.propertyName == '' || this.address == '' || this.detail == '' || this.areaName == '' || this.categoryName == '' || this.size == null || this.room == null || this.price == null || this.phoneNo == null) {
      this.check = true
    }
    else {
      this.check = false
      this.get_val1 = localStorage.getItem('url');
          this.get_val1 = JSON.parse(this.get_val1)
          var SI1=this.selectedImage1
          var SI2=this.selectedImage2
          var SI3=this.selectedImage3
          var SI4=this.selectedImage4
          this.get_val1.push({[SI1] : this.imageUrl1})
          this.get_val1.push({[SI2] : this.imageUrl2})
          this.get_val1.push({[SI3] : this.imageUrl3})
          this.get_val1.push({[SI4] : this.imageUrl4})
          console.log(this.get_val1)
          localStorage.setItem('url', JSON.stringify(this.get_val1));

      var val = {
        username:this.username,
        fullName: this.fullName,
        propertyName: this.propertyName,
        address: this.address,
        datail: this.detail,
        imgUrl1: this.selectedImage1,
        imgUrl2: this.selectedImage2,
        imgUrl3: this.selectedImage3,
        imgUrl4: this.selectedImage4,
        area: this.areaName,
        category: this.categoryName,
        size: this.size,
        room: this.room,
        price: this.price,
        phoneNo: this.phoneNo
  
      };
      console.log(val)
      this.service.postProperty(val).subscribe((res: any) => {
        console.log("res",res)})
        Swal.fire({
          icon: 'success',
          title: 'Thanks',
          text: 'Property has been uploded',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      
      
      // localStorage.setItem('url', JSON.stringify([]));
      //     console.log(res)
          
    }
   

  }
  area(area: any) {
    console.log(area.target.value)
    this.areaName = area.target.value
  }
  category(category: any) {
    console.log(category.target.value)
    this.categoryName = category.target.value
  }
}
