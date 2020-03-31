import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {NbComponentSize, NbMenuItem} from "@nebular/theme";
import {Owner} from "./owners/create-owner/_models/owner";
import {OwnerService} from "./shared/services/owner.service";
import {HttpClient} from "@angular/common/http";
import {OwnersDataSource} from "./owners/OwnersDataSource";
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit{
  allOwners: Owner[];
  selectedOwner: Owner = new Owner();
  sizes: NbComponentSize[] = ['medium'];
  fullname: string;
  storeOwnerId: number;
  constructor(public ownersService: OwnerService,  private http: HttpClient, private router: Router) {

  }


  ngOnInit(): void {
    this.getOwners();
    //this.fullname = this.selectedOwner.getFullName();

  }
  getOwners() {
    this.allOwners = [];
    this.ownersService.getOwners().subscribe((data: []) => {
      console.log(data);
      this.allOwners = data;
    });
    this.selectedOwner = this.allOwners[1];
    console.log(this.storeOwnerId + 'test')
  }
  onChangeObj(newOwner) {
    console.log(newOwner);
    this.selectedOwner = newOwner;
    console.log(this.selectedOwner.ID);
    this.storeOwnerId = this.selectedOwner.ID;

  }
  getOwnerDetails(ownerId: any) {
    this.router.navigate((['/get-owner/', ownerId])).then(r =>
      console.log('next task'));
  }
  gotoOwnersStores(storeOwnerId: any){
    this.router.navigate(['/list-stores/', storeOwnerId]).then(r =>
    console.log('this.selectedOwner'));
  }


}
