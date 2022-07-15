import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewcService {

  constructor(private http: HttpClient) { }
  addcourse(course:any){
  return this.http.post<any>("https://mylinkurcodesapp.herokuapp.com/addcourse",course)
}
view=()=>{
  return this.http.get("https://mylinkurcodesapp.herokuapp.com/getcourses")
}
}
