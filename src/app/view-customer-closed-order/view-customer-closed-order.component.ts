import { Component, OnInit } from '@angular/core';
import { CustomerServiceOrderService } from "../customer-service-order.service";
import { DataService } from "../data.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-view-customer-closed-order',
  templateUrl: './view-customer-closed-order.component.html',
  styleUrls: ['./view-customer-closed-order.component.css']
})
export class ViewCustomerClosedOrderComponent implements OnInit {

  constructor(private customerServiceOrderService: CustomerServiceOrderService,
              private dataService: DataService,
              private router: Router) { }
    orderId = "";
    orderInfo: any;
    currentServiceArr = [];
    recommendServiceArr = [];
    declinedServiceArr = [];
    currentTotalCost = 0;
    selectedTotalCost = 0;
    totalCurrentAndSelectCost = 0;
    totalCost = 0;
    taxWithSelected = 0;
    taxCurrent = 0;
    selected: any;
    selectedArray = [];
  ngOnInit() {
    this.orderId = this.customerServiceOrderService.currentServiceOrderInfo();
    if (this.orderId == "") {
      this.router.navigate(["/customerportal"]);
      return;
    }
    this.getOrderInfo(this.orderId);
    this.customerServiceOrderService.serviceOrderInfo.subscribe(
      (id) => {
        this.getOrderInfo(id);

      }
    );
  }

  getOrderInfo(value) {
    this.dataService.getServiceOrder(this.orderId)
    .subscribe(
      (response) => {
        this.orderInfo = response[0];
        this.currentServiceArr = [];
        this.recommendServiceArr = [];
        console.log(this.orderInfo);
        console.log(this.orderInfo.notes);
        for (var i = 0; i < response[0].cusCarService.length; i++) {
          if(response[0].cusCarService[i].status == "complete") {
            this.currentServiceArr.push(response[0].cusCarService[i]);
          }
        }
        for (var i = 0; i < response[0].cusCarService.length; i++) {
          if(response[0].cusCarService[i].status == "recommended") {
            this.recommendServiceArr.push(response[0].cusCarService[i]);
          }
        }
        for (var i = 0; i < response[0].cusCarService.length; i++) {
          if(response[0].cusCarService[i].status == "declined") {
            this.declinedServiceArr.push(response[0].cusCarService[i]);
          }
        }
        console.log("LENGTH OF REC: ", this.recommendServiceArr);
        if (response[0].status == "waiting on customer" && this.recommendServiceArr.length == 0) {
          var updateStatusObj = {
            status: "pending"
          }
          this.dataService.updateServiceOrder(this.orderId, updateStatusObj)
          .subscribe(
            res => {
              this.customerServiceOrderService.serviceOrderInfo.next(this.orderId);
            }
          )
        }
        console.log(this.currentServiceArr);
        this.getCurrentCost();
    },
      (error) => console.log(error)
    )
  }

  getCurrentCost() {
    this.currentTotalCost = 0;
    for (var i = 0; i < this.currentServiceArr.length; i++) {
      var serviceCost = parseFloat(this.currentServiceArr[i].price);
      this.currentTotalCost = this.currentTotalCost + serviceCost;
    }
    this.getTotalCost();
  }

  getTotalCost() {
    this.taxCurrent = 0;
    this.totalCost = 0;
    this.taxCurrent = this.currentTotalCost * .075;
    this.totalCost = this.currentTotalCost + this.taxCurrent;
  }

}
