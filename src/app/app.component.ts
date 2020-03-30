import {Component, OnInit} from '@angular/core';
import {NbComponentSize, NbMenuItem} from "@nebular/theme";
import {Owner} from "./owners/create-owner/_models/owner";
import {OwnerService} from "./shared/services/owner.service";
import {HttpClient} from "@angular/common/http";
import {OwnersDataSource} from "./owners/OwnersDataSource";
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  owners: Owner[];
  selectedOwner: Owner = new Owner();
  sizes: NbComponentSize[] = ['medium'];
  fullname: string;

  constructor(public ownersService: OwnerService,  private http: HttpClient, private router: Router) {

  }


  ngOnInit(): void {
    this.getOwners();
    this.fullname = this.selectedOwner.getFullName();
  }
  getOwners() {
    this.owners = [];
    this.ownersService.getOwners().subscribe((data: []) => {
      console.log(data);
      this.owners = data;
    });
  }
  onChangeObj(data){
    this.selectedOwner = data;
    console.log(this.selectedOwner);
    return this.selectedOwner;
  }
  title = 'med-app';
  items: NbMenuItem[] = [
    {
      title: 'Stores',
      link: 'list-stores/',
      queryParams: {storeOwnerId: this.selectedOwner.ID},
      icon: 'person-outline'
    },
    {
      title: 'Appointments',
      link: 'dashboard',
      icon: 'person-outline'
    },
    {
      title: 'Reports',
      link: 'dashboard',
      icon: 'person-outline'
    },
    {
      title: 'Get All Owners',
      link: 'list-owners',
      icon: 'person-outline'
    }, {
      title: 'dashboard',
      link: 'dashboard',
      icon: 'person-outline'
    }
  ];

}
