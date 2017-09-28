import { Component, Input } from '@angular/core';
import {RouterModule} from "@angular/router";
import {ActivatedRoute, NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//const i;
export class AppComponent {
  

  students = STUDENTS;
  title = 'Tour of Heroes';
 rows: any []=[];
 constructor() { 
    this.rows = STUDENTS;
  }
  //constructor(private router: Router, private activeRoute: ActivatedRoute) {}
  del(value){
    console.log(value);
      this.students.splice(value,1);
    
    //students.pop(splice(i,1));
  }
  
 
  // updateTodo(student, newValue,i){
  //   student.name = newValue;
    
  //   if(student.editing === false){
  //     document.getElementById('divId').style.display = 'none';
  //   }
  //   else{
  //     document.getElementById('divId').style.display = 'block'
  //   }
  // }
   
  @Input()

add(data){
   let indexForId = this.rows.length+1
    this.rows.push({
      id: indexForId, name: data
    })
}
  // navigate() {
  //   this.router.navigate(['AppStudent'])
  // }
}
export class student {
  id: number;
  name: string;
}
const STUDENTS: student[] = [
  { "id": 11, "name": "Bob" },
  { "id": 12, "name": "Jane" },
  { "id": 13, "name": "Sally" },
  { "id": 14, "name": "Sam" },
  { "id": 15, "name": "Mike" },
  { "id": 16, "name": "John" },
  { "id": 17, "name": "Jason" },
  { "id": 29, "name": "Kevin" },
  { "id": 20, "name": "Aniket" }
];



