import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AddStudentComponent} from "./add-student/add-student.component";
import {AppComponent} from "./app.component";

const appRoutes: Routes = [
  {path: 'App', component: AppComponent, children: [
    {path: 'AddStudent', component: AddStudentComponent}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutesModule { }
