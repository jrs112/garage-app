import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-employee-sign-in',
  templateUrl: './employee-sign-in.component.html',
  styleUrls: ['./employee-sign-in.component.css']
})
export class EmployeeSignInComponent implements OnInit {

  constructor(private dataService: DataService,
              private router: Router) { }


  errorMessage = "";
  ngOnInit() {

  }



  onSubmit(form) {
    this.errorMessage = "";
    console.log(form.value);
    this.dataService.logInUser(form.value)
    .subscribe(info => {
      console.log(info.url);
      let urlPath = info.url;
      let urlPathArray = urlPath.split('/');
      let lastSegment = urlPathArray[urlPathArray.length - 1];
      console.log(lastSegment);
      if(lastSegment === "") {
        this.errorMessage = "Incorrect Login Information";
        return;
      }

      this.router.navigate([lastSegment]);
    });

  }

}
