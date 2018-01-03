import { AddServiceService } from './../add-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {

  constructor(private _addServiceService: AddServiceService) { }
  serverMessage = '';
  serviceAdded = false;
  ngOnInit() {
  }
  onSubmit(f){
    this.serviceAdded = false;
    this.serverMessage = '';
    this._addServiceService.postService(f.value)
    .subscribe(info => {
      if (info.message) {
        this.serverMessage = info.message;
      } else {
        this.serviceAdded = true;
      }
      }
    )}
  }
