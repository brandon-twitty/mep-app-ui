import { Component, OnInit } from '@angular/core';
import {OwnerService} from "../../shared/services/owner.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Owner} from "../create-owner/_models/owner";
import {StoreService} from "../../shared/services/store.service";


@Component({
  selector: 'app-get-owner-details',
  templateUrl: './get-owner-details.component.html',
  styleUrls: ['./get-owner-details.component.scss']
})
export class GetOwnerDetailsComponent implements OnInit {
  ID: any;
  ownerData: any;
  owner: Owner;
  storeCount: number;
  constructor(private ownerService: OwnerService, private storeService: StoreService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
   this.activeRoute.params.subscribe(params => {
     this.ID = params.ID;
     console.log(this.ID)
   });
      this.getOwnerDetails(this.ID);
      this.countStores();
    }
    getOwnerDetails(ID){
      this.ownerService.getOwnerById(ID).subscribe((data: any) => {
        this.ownerData = data;
        console.log(this.ownerData);
      });

    }
  countStores() {
    this.storeService.getStoreByOwner(this.ID).subscribe((data: any) => {
      this.storeCount = data.length;
      console.log('store count for owner = ', this.storeCount);
    })
  }
}
