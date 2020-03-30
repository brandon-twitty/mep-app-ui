
import {Owner} from '../create-owner/_models/owner';
import {OwnerService} from '../../shared/services/owner.service';

import {OwnersDataSource} from '../OwnersDataSource';
import {Component, Input, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {NbWindowService} from "@nebular/theme";
import {CreateOwnerComponent} from "../create-owner/create-owner.component";
import {Router} from "@angular/router";


interface TreeNode<T> {
  dataTest: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}
interface FSEntry {
  OwnersFirstName: string
  OwnersPhoneNumber: string;
  OwnersEmailAddress: string;
  BookedAppointments?: number;
}
@Component({
  selector: 'app-list-owners',
  templateUrl: './list-owners.component.html',
  styleUrls: ['./list-owners.component.scss']
})
export class ListOwnersComponent implements OnInit {
  constructor(public ownersService: OwnerService,  private http: HttpClient, private windowService: NbWindowService, private route: Router) {

  }

  @Input() owner: Owner[];
  owners: Owner[];
  selectedOwner: Owner = new Owner();
  displayedColumns: string[] = ['ownersName', 'ownersPhone', 'ownersEmail', 'bookedApt'];
  dataSource: OwnersDataSource;
  openWindow() {
    this.windowService.open(CreateOwnerComponent, {title: `Create New Owner`});
  }

  /*data: TreeNode<FSEntry>[] = [
    {
      data: {ownersFirstName: this.owner.OwnersFirstName , OwnersPhoneNumber: '1.8 MB', BookedAppointments: 5, OwnersEmailAddress: 'dir'},
    }
  ];
  private dataTest: TreeNode<IOwner>[]= [
    {
      dataTest: {IOwner}
    }
  ];*/
  customColumn = 'Owners Name';
  customColumnTwo = 'Phone Number';
  columnThree = 'Owners Email';
  columnFour = 'Booked Appointments';
  defaultColumns = [ 'OwnersPhoneNumber', 'OwnersEmailAddress', 'BookedAppointments' ];
  allColumns = [ this.displayedColumns ];


  sortColumn = '';

  mapTree = new Map();

  ngOnInit(): void {
    this.getOwners();
    this.dataSource = new OwnersDataSource(this.ownersService);

  }


  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }

  getOwners() {
    this.owners = [];
    this.ownersService.getOwners().subscribe((data: []) => {
      console.log(data);
      this.owners = data;
    });
  }
  deleteOwner(ID){
    this.ownersService.deleteOwner(ID).subscribe(res => {
      console.log(res);
      this.owners.splice(ID, 1);
    });
}
  onChangeObj(newOwner) {
    console.log(newOwner);
    this.selectedOwner = newOwner;
    return this.selectedOwner;
  }
  ownerDetails(ID: number){
    this.route.navigate(['details', ID]).then(r =>
    console.log(r));
  }

}
