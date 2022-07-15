import { Component, OnInit } from '@angular/core';
import { ViewcService } from '../viewc.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
course={
courseTitle:"",
courseDescription:"",
courseVenue:"",
courseDuration:"",
courseDate:""
}
  constructor(private courseservice:ViewcService) { }

  ngOnInit(): void {}
  addcourse(){
    this.courseservice.addcourse(this.course).subscribe((data)=>{
    console.log(this.course)
    })
    alert("Success");
}  
}