import {ChangeDetectionStrategy, Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {Owner} from "./owners/create-owner/_models/owner";
import {OwnerService} from "./shared/services/owner.service";
import {HttpClient} from "@angular/common/http";
import {OwnersDataSource} from "./owners/OwnersDataSource";
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from "@angular/router";
import {MatSidenav} from "@angular/material/sidenav";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit{
  opened = true;
  @ViewChild('sidenav') sidenav: MatSidenav;
  allOwners: Owner[];
  selectedOwner: Owner = new Owner();
  fullname: string;
  storeOwnerId: number;
  constructor(public ownersService: OwnerService,  private http: HttpClient, private router: Router) {

  }


  ngOnInit() {

    console.log(window.innerWidth);
    if (window.innerWidth < 768) {
      this.sidenav.fixedTopGap = 55;
      this.opened = false;
    } else {
      this.sidenav.fixedTopGap = 55;
      this.opened = true;
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 768) {
      this.sidenav.fixedTopGap = 55;
      this.opened = false;
    } else {
      this.sidenav.fixedTopGap = 55;
      this.opened = true;
    }
  }

  isBiggerScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width < 768) {
      return true;
    } else {
      return false;
    }
  }
}

 /* getOwners() {
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
  }*/



