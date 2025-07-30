import { Component, OnInit } from '@angular/core';
import { SareeService } from '../services/saree.service';

@Component({
  selector: 'app-saree-list',
  templateUrl: './saree-list.component.html',
  styleUrls: ['./saree-list.component.css']
})
export class SareeListComponent implements OnInit{
  //list of all list into array
  sarees:any[]=[]
  constructor(private service:SareeService){}

  //this method comes automatically with the interface OnInit
  ngOnInit(): void {
    this.service.getsaree().subscribe((data=>{
      this.sarees=data;
    }))
  }



}
