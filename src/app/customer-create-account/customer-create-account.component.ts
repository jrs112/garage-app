import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-customer-create-account',
  templateUrl: './customer-create-account.component.html',
  styleUrls: ['./customer-create-account.component.css']
})
export class CustomerCreateAccountComponent implements OnInit {

  constructor(private dataService: DataService,
              private router: Router) { }
  errMsg = "";
  ngOnInit() {
  }

  onSubmit(form) {
    this.errMsg = "";
    if(form.value.password != form.value.password2) {
      this.errMsg = "The passwords entered do not match.  Please try again.";
      return;
    }
    this.dataService.signUpCusUser(form.value)
    .subscribe(info => {
      console.log(info.url);
      let urlPath = info.url;
      let urlPathArray = urlPath.split('/');
      let lastSegment = urlPathArray[urlPathArray.length - 1];
      if(lastSegment == "customerlanding") {
        this.errMsg = "There is already an account with this email.";
      }
      console.log(lastSegment);

      this.router.navigate([lastSegment]);
    });

  }

}
