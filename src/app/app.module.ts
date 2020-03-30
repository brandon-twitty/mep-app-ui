
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IntroComponent } from './intro/intro.component';
import { ScheduleComponent } from './schedule/schedule.component';

import { CreateOwnerComponent } from './owners/create-owner/create-owner.component';
import { ListOwnersComponent } from './owners/list-owners/list-owners.component';
import { EditOwnersComponent } from './owners/edit-owners/edit-owners.component';
import { GetOwnerComponent } from './owners/get-owner/get-owner.component';
import { EditStoreComponent } from './stores/edit-store/edit-store.component';
import { ListStoresComponent } from './stores/list-stores/list-stores.component';
import { AddStoreComponent } from './stores/add-store/add-store.component';
import {OwnerService} from './shared/services/owner.service';
import {PatientService} from './shared/services/patient.service';
import {StoreService} from './shared/services/store.service';
import { GetStoreComponent } from './stores/get-store/get-store.component';
import { AddAgentComponent } from './agent/add-agent/add-agent.component';
import { ListAgentComponent } from './agent/list-agent/list-agent.component';
import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from "@angular/common";

import {NbEvaIconsModule} from "@nebular/eva-icons";
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule, NbContextMenuModule,
  NbInputModule,
  NbLayoutModule, NbMenuModule, NbSelectModule, NbSidebarModule,
  NbStepperModule,
  NbThemeModule, NbTreeGridModule, NbWindowModule
} from "@nebular/theme";
import { SideBarComponent } from './side-bar/side-bar.component';
import {config} from "rxjs";

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ScheduleComponent,
    CreateOwnerComponent,
    ListOwnersComponent,
    EditOwnersComponent,
    GetOwnerComponent,
    EditStoreComponent,
    ListStoresComponent,
    AddStoreComponent,
    GetStoreComponent,
    AddAgentComponent,
    ListAgentComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbSelectModule,
    NbTreeGridModule,
    NbContextMenuModule,
    NbActionsModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbWindowModule.forRoot(),

  ],
  providers: [OwnerService, PatientService, StoreService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
