import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Tracking } from "../tracking.model";

@Component({
  selector: "app-tracking-update",
  templateUrl: "./tracking-update.component.html",
  styleUrls: ["./tracking-update.component.css"]
})
export class TrackingUpdateComponent implements OnInit {

  form: FormGroup;
  ngOnInit() {

  }
}
