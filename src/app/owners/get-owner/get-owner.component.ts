import {Component, Inject, OnInit} from '@angular/core';
import {Owner} from '../create-owner/_models/owner';
import {OwnerService} from '../../shared/services/owner.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-get-owner',
  templateUrl: './get-owner.component.html',
  styleUrls: ['./get-owner.component.scss']
})
export class GetOwnerComponent implements OnInit {
  owner: Owner ;
  //currentOwner = null;
  ownersStores: any [];
  ID: number =null;
  private currentOwner: any;

  constructor(public ownersService: OwnerService, @Inject("") public storeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.owner = new Owner();
    this.ID = this.route.snapshot.params['ID'];
    this.getCurrentOwner(this.route.snapshot.paramMap.get('ID'));
    this.owner.getFullName();

    this.ownersService.getOwnerById(this.ID)
      .subscribe(owner => {
        console.log(owner);
        this.owner = owner;
      }, error => console.log(error))
  }
  getCurrentOwner(ID){
    this.ownersService.getOwnerById(ID)
      .subscribe(
        data => {
          this.owner = data;
          console.log(data);
        }
      )
  }

}
