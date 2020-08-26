import { Component, OnInit, NgModule } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Tracking } from "../tracking.model";
import { TrackingsService } from "../trackings.service";

@Component({
  selector: 'app-tracking-create',
  templateUrl: './tracking-create.component.html',
  styleUrls: ['./tracking-create.component.css']
})

export class TrackingCreateComponent implements OnInit {

  public ptnNumber;
  public po;
  public status;
  public supplier;
  public shipto;
  // public ptnObj : Ptn
  public isPTNCreated = false;

  form: FormGroup;

  constructor(
    public trackingsService: TrackingsService,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      trackingNo: new FormControl(null, {
        validators: [Validators.required]
      }),
      po: new FormControl(null, {
        validators: [
          // Validators.required,
          // Validators.minLength(10),
          // Validators.maxLength(10)
        ]
      }),
      status: new FormControl(null, {
        validators: [
          // Validators.required
        ]
      }),
      vendor: new FormControl(null, {
        validators: [
          // Validators.required
        ]
      }),
      shipto: new FormControl(null, {
        validators: [
          // Validators.required
        ]
      })
    });
  }

  onSaveTracking() {
    if (this.form.invalid) {
      console.log("invalid!");
      return;
    }

    this.trackingsService.addTracking(
      this.form.value.trackingNo,
      this.form.value.po,
      this.form.value.status,
      this.form.value.vendor,
      this.form.value.shipto
     
    );

    console.log("submit!");
    // this.form.reset();
  }
}
