import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataService: DataService,
              private router: Router) { }

    isAdmin = false;

  ngOnInit() {
    this.isAdmin = false;
    this.dataService.getUserInfo()
    .subscribe(
      (req) => {
        console.log("role: ", req.local.role);
        if (req.local.role === "Admin") {
          console.log("Is Admin");
          this.isAdmin = true;
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

      this.router.navigate([lastSegment]);
    });
  }

}
