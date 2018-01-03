import { Component, OnInit } from '@angular/core';
import { ServiceOrderService } from "../../service-order.service";
import { DataService } from "../../data.service";

@Component({
  selector: 'app-view-service-order-info',
  templateUrl: './view-service-order-info.component.html',
  styleUrls: ['./view-service-order-info.component.css']
})
export class ViewServiceOrderInfoComponent implements OnInit {

  constructor(private serviceOrderService: ServiceOrderService,
              private dataService: DataService) { }
    orderId = "";
    orderNotes = [];
    orderInfo: any;
    recServiceArr = [];
    declinedServiceArr = [];
    currentServiceArr = [];
    toggleInfoView = true;
    currentTotalCost = 0;
    recTotalCost = 0;
    totalCurrentAndRecCost = 0;
    totalCost = 0;
    taxWithRec = 0;
    taxCurrent = 0;

  ngOnInit() {
    this.orderId = this.serviceOrderService.currentServiceOrderInfo();

    this.getOrderInfo(this.orderId);
    this.serviceOrderService.serviceOrderInfo.subscribe(
      (id) => {
        this.getOrderInfo(id);
      }
    );
  }

  getOrderInfo(value) {
    this.dataService.getServiceOrder(this.orderId)
    .subscribe(
      (response) => {
        this.declinedServiceArr = [];
        this.orderInfo = response[0];
        this.orderNotes = response[0].notes;
        this.recServiceArr = [];
        this.currentServiceArr = [];
        console.log(this.orderInfo);
        console.log(this.orderInfo.notes);
        for (var i = 0; i < response[0].cusCarService.length; i++) {
          if(response[0].cusCarService[i].status == "recommended") {
            this.recServiceArr.push(response[0].cusCarService[i]);
          }
        }
        for (var i = 0; i < response[0].cusCarService.length; i++) {
          if(response[0].cusCarService[i].status === "declined") {
            this.declinedServiceArr.push(response[0].cusCarService[i]);
          }
        }
        for (var i = 0; i < response[0].cusCarService.length; i++) {
          if(response[0].cusCarService[i].status === "complete" || response[0].cusCarService[i].status === "pending") {
            this.currentServiceArr.push(response[0].cusCarService[i]);
          }
        }
        console.log(this.recServiceArr);
        this.getRecTotalCost();
    },
      (error) => console.log(error)
    )
  }

  getRecTotalCost() {
    this.recTotalCost = 0;
    for (var i = 0; i < this.recServiceArr.length; i++) {
      var serviceCost = parseFloat(this.recServiceArr[i].price);
      this.recTotalCost = this.recTotalCost + serviceCost;
    }
    console.log("Rec Total Cost: ", this.recTotalCost);
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
    this.taxWithRec = 0;
    this.taxCurrent = 0;
    this.totalCost = 0;
    this.totalCurrentAndRecCost = 0;
    this.taxCurrent = this.currentTotalCost * .075;
    this.taxWithRec = (this.recTotalCost + this.currentTotalCost) * .075;
    this.totalCost = this.currentTotalCost + this.taxCurrent;
    this.totalCurrentAndRecCost = this.currentTotalCost + this.recTotalCost + this.taxWithRec;
  }

}
