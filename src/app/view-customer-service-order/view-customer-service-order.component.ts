import { Component, OnInit } from '@angular/core';
import { CustomerServiceOrderService } from "../customer-service-order.service";
import { DataService } from "../data.service";

@Component({
  selector: 'app-view-customer-service-order',
  templateUrl: './view-customer-service-order.component.html',
  styleUrls: ['./view-customer-service-order.component.css']
})
export class ViewCustomerServiceOrderComponent implements OnInit {

  constructor(private customerServiceOrderService: CustomerServiceOrderService,
              private dataService: DataService) { }
    orderId = "";
    orderInfo: any;
    currentServiceArr = [];
    recommendServiceArr = [];
    declinedServiceArr = [];
    selectedServicesArr = [];
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
        console.log(this.orderInfo);
        console.log(this.orderInfo.notes);
        for (var i = 0; i < response[0].cusCarService.length; i++) {
          if(response[0].cusCarService[i].status == "complete" || response[0].cusCarService[i].status === "pending") {
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
        console.log(this.currentServiceArr);
        this.getCurrentCost();
    },
      (error) => console.log(error)
    )
  }

  selectService(service) {
    for (var i = 0; i < this.selectedServicesArr.length; i++) {
      if (service == this.selectedServicesArr[i]) {
        var newSelectArray = this.selectedServicesArr.filter((index) => index != service);
        this.selectedServicesArr = newSelectArray;
        this.getSelectedTotalCost();
        return;
      }
    }

       this.addServiceToDisplay(service);
  }

  isActive(service) {
    for (var i = 0; i < this.selectedServicesArr.length; i++) {
      if (service == this.selectedServicesArr[i]) {
        return true;
      }
    }
      return false;
  };

  addServiceToDisplay(service) {
    this.selectedServicesArr.push(service);
    console.log("Selected Array: ", this.selectedServicesArr);
    this.getSelectedTotalCost();
  }

  getSelectedTotalCost() {
    this.selectedTotalCost = 0;
    for (var i = 0; i < this.selectedServicesArr.length; i++) {
      console.log("cost: ", this.selectedServicesArr[i].price);
      var serviceCost = parseFloat(this.selectedServicesArr[i].price);
      this.selectedTotalCost = this.selectedTotalCost + serviceCost;
    }
    console.log("Selected Total Cost: ", this.selectedTotalCost);
    this.getCurrentCost();
  }

  getCurrentCost() {
    this.currentTotalCost = 0;
    console.log("length ", this.currentServiceArr.length);
    for (var i = 0; i < this.currentServiceArr.length; i++) {
      console.log("Current cost: ", this.currentServiceArr[i].price);
      var serviceCost = parseFloat(this.currentServiceArr[i].price);
      this.currentTotalCost = this.currentTotalCost + serviceCost;
    }
    console.log("Current Total Cost: ", this.currentTotalCost);
    this.getTotalCost();
  }

  getTotalCost() {
    this.taxWithSelected = 0;
    this.taxCurrent = 0;
    this.totalCost = 0;
    this.totalCurrentAndSelectCost = 0;
    this.taxCurrent = this.currentTotalCost * .075;
    this.taxWithSelected = (this.selectedTotalCost + this.currentTotalCost) * .075;
    this.totalCost = this.currentTotalCost + this.taxCurrent;
    this.totalCurrentAndSelectCost = this.currentTotalCost + this.selectedTotalCost + this.taxWithSelected;
  }




}
