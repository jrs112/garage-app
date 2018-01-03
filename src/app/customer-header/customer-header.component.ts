import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-customer-header',
  templateUrl: './customer-header.component.html',
  styleUrls: ['./customer-header.component.css']
})
export class CustomerHeaderComponent implements OnInit {

  constructor(private dataService: DataService,
              private router: Router) { }
  isLoggedIn = false;
  name = "";
  ngOnInit() {
    this.isLoggedIn = false;
    this.name = "";
    this.dataService.getUserInfo()
    .subscribe(
      (req) => {
        if (req.local && !req.local.role) {
          this.isLoggedIn = true;
          this.name = req.local.first_name + " " + req.local.last_name;
        } else {
          console.log("Is not admin");
        }
      },
      (error) => console.log(error)
      );
  }

  logOut() {
    this.dataService.logOutUser()
    .subscribe(info => {
      console.log(info.url);
      let urlPath = info.url;
      let urlPathArray = urlPath.split('/');
      let lastSegment = urlPathArray[urlPathArray.length - 1];
      console.log(lastSegment);

      this.router.navigate(['customerlanding']);
    });
  }

}
