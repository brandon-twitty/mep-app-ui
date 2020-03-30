import {Component, OnInit} from '@angular/core';
import {NbComponentSize, NbMenuItem} from "@nebular/theme";
import {Owner} from "./owners/create-owner/_models/owner";
import {OwnerService} from "./shared/services/owner.service";
import {HttpClient} from "@angular/common/http";
import {OwnersDataSource} from "./owners/OwnersDataSource";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  owners: Owner[];
  selectedOwner: Owner = new Owner();
  sizes: NbComponentSize[] = ['medium'];

  constructor(public ownersService: OwnerService,  private http: HttpClient) {

  }
  ngOnInit(): void {
    this.getOwners();

  }
  getOwners() {
    this.owners = [];
    this.ownersService.getOwners().subscribe((data: []) => {
      console.log(data);
      this.owners = data;
    });
  }
  onChangeObj(newOwner){
    console.log(newOwner);
    this.selectedOwner = newOwner;

    return this.selectedOwner;
  }
  title = 'med-app';
  items: NbMenuItem[] = [
    {
      title: 'Stores',
      link: 'list-stores-by-owner',
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
      title: 'dashboard',
      link: 'dashboard',
      icon: 'person-outline'
    }, {
      title: 'dashboard',
      link: 'dashboard',
      icon: 'person-outline'
    }
  ];

}
