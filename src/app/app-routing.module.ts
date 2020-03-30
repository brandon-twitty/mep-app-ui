import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IntroComponent} from './intro/intro.component';
import {ScheduleComponent} from './schedule/schedule.component';
import {CreateOwnerComponent} from './owners/create-owner/create-owner.component';
import {EditOwnersComponent} from './owners/edit-owners/edit-owners.component';
import {GetOwnerComponent} from './owners/get-owner/get-owner.component';
import {AddStoreComponent} from './stores/add-store/add-store.component';
import {EditStoreComponent} from './stores/edit-store/edit-store.component';
import {ListStoresComponent} from './stores/list-stores/list-stores.component';
import {ListOwnersComponent} from './owners/list-owners/list-owners.component';
import {GetStoreComponent} from './stores/get-store/get-store.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-owners',
    pathMatch: 'full'
  },
  {
    path: 'qualify',
    component: IntroComponent,
    data: {title: 'Qualify'}
  },
  {
    path: 'schedule-appointment',
    component: ScheduleComponent,
    data: {title: 'Schedule Appointment'}
  },
  {
    path: 'create-owner',
    component: CreateOwnerComponent
  },
  {
    path: 'edit-owner/:id',
    component: EditOwnersComponent
  },
  {
    path: 'get-owner/:ID',
    component: GetOwnerComponent
  },
  {
    path: 'list-owners',
    component: ListOwnersComponent
  },
  {
    path: 'add-store',
    component: AddStoreComponent
  },
  {
    path: 'edit-store/:id',
    component: EditStoreComponent
  },
  {
    path: 'get-store/:id',
    component: GetStoreComponent
  },
  {
    path: 'list-stores/:storeOwnerId',
    component: ListStoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
