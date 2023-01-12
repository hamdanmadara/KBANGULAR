import { Component, OnInit } from '@angular/core';
// import { saveAs} from 'file-saver';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  selectedCity: any;
  selecetdFile :any= File;
imagePreview:any= String;
  constructor() { }
  

  ngOnInit(): void {
    localStorage.setItem('url', JSON.stringify([{"ur1":"urll"}]));
    
  }
  
 
  url="./assets/images/"
  list:any=[]
  imageUrl:any

// downloadImg(url,name){
//   saveAs(url, name+'.png');
// }

  onselectFile(e:any){
    
    if(e.target.files){
      var reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      this.selectedCity=e.target.files[0]
      reader.onload=(event:any)=>{
        this.url=event.target.result
        console.log("aaaaaaaaaa",event.target)
        this.list.push(this.url)
        this.imageUrl=this.url
        console.log(this.imageUrl)
        console.log(this.selectedCity)

      }

    }

  }
  
onFileUpload(event:any){
this.selecetdFile = event.target.files[0];
const reader = new FileReader();
reader.onload = () => {
this.imagePreview = reader.result;
};
reader.readAsDataURL(this.selecetdFile);
console.log(this.selecetdFile)
// console.log(reader.FileReader.result)
}


  // name = 'Angular';
  // fileToUpload: any;
  // imageUrl: any;
  
  // handleFileInput(file: FileList) {
    
  //   this.fileToUpload = file.item(0);

  //   //Show image preview
  //   let reader = new FileReader();
  //   reader.onload = (event: any) => {
  //     this.imageUrl = event.target.result;
  //     // console.log(this.imageUrl);
  //   };
  //   reader.readAsDataURL(this.fileToUpload);
  // }

}
