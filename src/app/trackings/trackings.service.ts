import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

import { environment } from "../../environments/environment";
import { Tracking } from "./tracking.model";

const BACKEND_URL = environment.apiUrl + "/trackings/";

@Injectable({ providedIn: "root" })
export class TrackingsService {
  private trackings: Tracking[] = [];
  private trackingsUpdated = new Subject<Tracking[]>();

  constructor(private http: HttpClient, private router: Router) {}

  getTrackings() {
    this.http.get<{ message: string; trackings: any }>(
      BACKEND_URL
        )
        .pipe(map((trackingData) => {
          return trackingData.trackings.map(tracking => {
            return {
              id: tracking._id,
              trackingNo: tracking.trackingNo,
              po: tracking.po,
              status: tracking.status,
              vendor: tracking.vendor,
              shipto: tracking.shipto

            };
          });
        }))
        .subscribe((transformedTrackings) => {
          this.trackings = transformedTrackings;
          this.trackingsUpdated.next([...this.trackings]);
        });
  }

  getTrackingUpdateListener() {
    return this.trackingsUpdated.asObservable();
  }

  addTracking(
    trackingNo: string,
    po: string,
    status:  string,
    vendor: string,
    shipto: string
    ) {

    // const trackingData = new FormData();
    // trackingData.append("trackingNo", trackingNo);
    // trackingData.append("po", po);
    // trackingData.append("status", status);
    // trackingData.append("vendor", vendor);
    // trackingData.append("shipto", shipto);
    const tracking: Tracking = {
      id: null,
      trackingNo: trackingNo,
      po: po,
      status: status,
      vendor: vendor,
      shipto: shipto
    };
    this.http
      .post<{ message: string; trackingId: string }>(
        BACKEND_URL,
        tracking
      )
      .subscribe(responseData => {
        const id = responseData.trackingId;
        // const tracking: Tracking = {
        //   id: null,
        //   trackingNo: trackingNo,
        //   po: po,
        //   status: status,
        //   vendor: vendor,
        //   shipto: shipto,
        //   unloadingPoint: responseData.tracking.unloadingPoint,
        //   recipient: responseData.tracking.recipient,
        //   createdBy: responseData.tracking.createdBy,
        // const createdTimeStamp = responseData.tracking.createdTimeStamp

        tracking.id = id;
        this.trackings.push(tracking);
        this.trackingsUpdated.next([...this.trackings]);
        // this.router.navigate(["/"]);
      });
  }

  deleteTracking(trackingId: string){
    this.http.delete(BACKEND_URL + trackingId)
      .subscribe(() => {
        const updatedTrackings = this.trackings.filter(tracking => tracking.id !== trackingId);
        this.trackings = updatedTrackings;
        this.trackingsUpdated.next([...this.trackings]);
      });
  }
}
