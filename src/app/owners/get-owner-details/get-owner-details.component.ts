import { Component, OnInit } from '@angular/core';
import {OwnerService} from "../../shared/services/owner.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Owner} from "../create-owner/_models/owner";

@Component({
  selector: 'app-get-owner-details',
  templateUrl: './get-owner-details.component.html',
  styleUrls: ['./get-owner-details.component.scss']
})
export class GetOwnerDetailsComponent implements OnInit {
  ownerId: any;
  owner: Owner;

  constructor(private ownerService: OwnerService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.ownerId = this.activeRoute.snapshot.params['id'];
    this.loadOwnerDetails(this.ownerId)
  }
  loadOwnerDetails(ownerId) {
    this.ownerService.getOwnerById(ownerId).subscribe(owner => {
      console.log(owner);
      this.owner = owner;
    })
  }
  navigation(link){
    this.router.navigate([link]);
  }

}
