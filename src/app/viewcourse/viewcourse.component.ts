import { Component, OnInit } from '@angular/core';
import { ViewcService } from '../viewc.service';

@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrls: ['./viewcourse.component.css']
})
export class ViewcourseComponent implements OnInit {

  constructor(private api:ViewcService) { 
  api.view().subscribe(
    (response)=>{
      this.data=response
    }
  )}
  ngOnInit(): void {}

  data:any=[ ]
}
