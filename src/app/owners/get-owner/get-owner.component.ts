import { Component, OnInit } from '@angular/core';
import {Owner} from '../create-owner/_models/owner';
import {OwnerService} from '../../shared/services/owner.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-get-owner',
  templateUrl: './get-owner.component.html',
  styleUrls: ['./get-owner.component.scss']
})
export class GetOwnerComponent implements OnInit {
  owners: Owner[];
  owner: any = {};
  ownersStores: any [];
  selectedOwner = this.owners[1];
  constructor(public ownersService: OwnerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.ownersService.getOwnerById(params['ID']).subscribe(res => {
        this.owner = res;
      })
    })
    this.route.params.subscribe(params =>) {
      this.ownersService.getStoresByOwnerId(params['ID']).subscribe(res =>) {
        this.ownersStores = res;
      }
    }
  }

  onChangeObj(newOwner) {
    console.log(newOwner);
    this.selectedOwner = newOwner;
  }
}
