import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';

import { Tracking } from "../tracking.model";
import { TrackingsService } from "../trackings.service";

@Component({
  selector: "app-tracking-list",
  templateUrl: "./tracking-list.component.html",
  styleUrls: ["./tracking-list.component.css"]
})
export class TrackingListComponent implements OnInit, OnDestroy {
  // posts = [
  //   { title: "First Post", content: "This is the first post's content" },
  //   { title: "Second Post", content: "This is the second post's content" },
  //   { title: "Third Post", content: "This is the third post's content" }
  // ];
  trackings: Tracking[] = [];
  isLoading = false;
  private trackingsSub: Subscription;

  constructor(public trackingsService: TrackingsService) {}

  ngOnInit() {
    this.isLoading = true;
    this.trackingsService.getTrackings();
    this.trackingsSub = this.trackingsService.getTrackingUpdateListener()
      .subscribe((trackings: Tracking[]) => {
        this.isLoading = false;
        this.trackings = trackings;
      });

  }

  onDelete(trackingId: string){
    this.trackingsService.deleteTracking(trackingId);
  }

  ngOnDestroy() {
    this.trackingsSub.unsubscribe();
  }
}
