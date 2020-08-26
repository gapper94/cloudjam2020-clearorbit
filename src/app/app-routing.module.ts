import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { WelcomeComponent } from "./welcome/welcome.component";
import { TrackingCreateComponent } from "./trackings/tracking-create/tracking-create.component";
import { TrackingListComponent } from "./trackings/tracking-list/tracking-list.component";
import { TrackingShowComponent } from './trackings/tracking-show/tracking-show.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'trackings/new', component: TrackingCreateComponent },
  { path: 'trackings', component: TrackingListComponent },
  { path: 'trackings/:id', component: TrackingShowComponent },
  { path: 'profile', component: ProfileComponent }
]

@NgModule ({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
