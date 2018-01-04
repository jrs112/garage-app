import { Component, OnInit } from '@angular/core';
import { AddServiceService } from "../add-service.service";
import { DataService } from "../data.service";
import { Router } from "@angular/router";
import { CustomerServiceOrderService } from "../customer-service-order.service";
@Component({
  selector: 'app-customer-closed-work',
  templateUrl: './customer-closed-work.component.html',
  styleUrls: ['./customer-closed-work.component.css']
})
export class CustomerClosedWorkComponent implements OnInit {

  constructor(private dataService: DataService,
              private addServiceService: AddServiceService,
              private router: Router,
              private customerServiceOrderService: CustomerServiceOrderService) { }
  currentUser = {};
  currentServices = [];
  closedServices = [];


  ngOnInit() {
    this.dataService.getUserInfo().subscribe(
      (user) => {
          console.log(user);
          this.currentUser = user.local;
          console.log("EMAIL ", user.local.email);
          this.getCustomerOrders(user.local.email);
      }
    );
  }

  getCustomerOrders(email) {
    this.dataService.getCustomerServiceOrder(email).subscribe(
      (orders) => {
        console.log("ORDERS ARE: ", orders);
        this.currentServices = orders;
        for (var i = 0; i < orders.length; i++) {
          if(orders[i].status === "closed") {
            this.closedServices.push(orders[i]);
          }
        }
      }
    )
  }

  selectOrder(value) {
    this.customerServiceOrderService.updateCurrentOrder(value);
    this.router.navigate(["/viewcustomerclosedeorder"]);
}
}
