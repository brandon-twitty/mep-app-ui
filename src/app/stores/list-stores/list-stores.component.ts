import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {StoreService} from "../../shared/services/store.service";
import {Store} from "..";

@Component({
  selector: 'app-list-stores',
  templateUrl: './list-stores.component.html',
  styleUrls: ['./list-stores.component.scss']
})
export class ListStoresComponent implements OnInit {
  currentOwner = null;
  store: Store;
  stores = [];
  constructor(private route: ActivatedRoute, private storeService: StoreService ) { }

  ngOnInit(): void {
    this.getStoresByOwner(this.route.snapshot.paramMap.get('storeOwnerId'));

  }
  getStoresByOwner(storeOwnerId) {
   this.storeService.getStoreByOwner(storeOwnerId).subscribe(store => this.store = store)


  }
}
