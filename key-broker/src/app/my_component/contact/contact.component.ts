import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  val1:any=""

  constructor(private service: SharedService,) { }

  ngOnInit(): void {
    this.service.getImage().subscribe(res => {
      console.log("res",res)
    this.val1=res})
      
  }

}
