import { Component, OnInit } from '@angular/core';
import { ServiceOrderService } from "../service-order.service";
import { DataService } from "../data.service";

@Component({
  selector: 'app-view-service-order',
  templateUrl: './view-service-order.component.html',
  styleUrls: ['./view-service-order.component.css']
})
export class ViewServiceOrderComponent implements OnInit {

  constructor(private serviceOrderService: ServiceOrderService,
              private dataService: DataService) { }
  orderId = "";

  orderInfo: any;

  orderNotes = [];

  ngOnInit() {

  }


  onSubmit(form) {
    if(form.value.cusAttendant == ""  || form.value.cusAttendant == null) {
      delete form.value.cusAttendant;
    }
    if(form.value.status == "" || form.value.status == null) {
      delete form.value.status;
    }
    if(form.value.location == "" || form.value.location == null) {
      delete form.value.location;
    }

    console.log(form.value);
    console.log(this.orderId);

    this.dataService.updateServiceOrder(this.orderId, form.value)
    .subscribe(
      res => {
        // this.getOrderInfo(this.orderId);
      }
    )

  }

  onNoteSubmit(form) {
    console.log(form.value);
    this.dataService.addServiceOrderNote(this.orderId, form.value)
    .subscribe(
      res => {
        // this.getOrderInfo(this.orderId);
      }
    )
  }

}
