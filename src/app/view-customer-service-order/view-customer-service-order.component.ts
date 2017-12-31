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
    declineMessage = "";
    approveMessage = "";
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
        this.recommendServiceArr = [];
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

  selectService(service) {
    this.approveMessage = "";
    this.declineMessage = "";
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
      var serviceCost = parseFloat(this.selectedServicesArr[i].price);
      this.selectedTotalCost = this.selectedTotalCost + serviceCost;
    }
    console.log("Selected Total Cost: ", this.selectedTotalCost);
    this.getCurrentCost();
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
    this.taxWithSelected = 0;
    this.taxCurrent = 0;
    this.totalCost = 0;
    this.totalCurrentAndSelectCost = 0;
    this.taxCurrent = this.currentTotalCost * .075;
    this.taxWithSelected = (this.selectedTotalCost + this.currentTotalCost) * .075;
    this.totalCost = this.currentTotalCost + this.taxCurrent;
    this.totalCurrentAndSelectCost = this.currentTotalCost + this.selectedTotalCost + this.taxWithSelected;
  }

  showApproveMsg() {
    this.approveMessage = "";
    var chosenServices = "";
    for (var i = 0; i < this.selectedServicesArr.length; i++) {
      if(this.selectedServicesArr.length == 1) {
        chosenServices += this.selectedServicesArr[i].type;
      } else if(i == this.selectedServicesArr.length - 1) {
        chosenServices += " and " + this.selectedServicesArr[i].type;
      } else {
      chosenServices += " " + this.selectedServicesArr[i].type + ",";
      }
    }
    this.approveMessage = "Please confirm that you approve your mechanic to complete the " + chosenServices + ". This will bring your bill total to $" + this.totalCurrentAndSelectCost.toFixed(2) +".";


  }

  showDeclineMsg() {
    this.declineMessage = "";
    var chosenServices = "";
    for (var i = 0; i < this.selectedServicesArr.length; i++) {
      if(this.selectedServicesArr.length == 1) {
        chosenServices += this.selectedServicesArr[i].type;
      } else if(i == this.selectedServicesArr.length - 1) {
        chosenServices += " and " + this.selectedServicesArr[i].type;
      } else {
      chosenServices += " " + this.selectedServicesArr[i].type + ",";
      }
    }
    this.declineMessage = "Please confirm that you would like to decline the " + chosenServices + " recommended by your mechanic.";
  }

  updateSelectedService(newStatus) {
    this.approveMessage = "";
    this.declineMessage = "";
    for (var i = 0; i < this.selectedServicesArr.length; i++) {
      var updateObj = {
        type: this.selectedServicesArr[i].type,
        newStatus: newStatus
      };
      this.dataService.updateServiceOrderService(this.orderId, updateObj)
      .subscribe(
        res => {
          console.log("service updated: ", res);
        }
      );
    }
    this.customerServiceOrderService.serviceOrderInfo.next(this.orderId);
    this.selectedServicesArr = [];
    console.log("CURRENT SERVICES ARRAY: ", this.currentServiceArr);
  }

}
