import { Component, OnInit } from '@angular/core';
import {NbMenuItem} from "@nebular/theme";
import {ListOwnersComponent} from "../owners/list-owners/list-owners.component";
import {ListStoresComponent} from "../stores/list-stores/list-stores.component";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  Owners = 'Owners';
  items: NbMenuItem[] = [
    {
      title: this.Owners,
      link: 'list-owners'
    },
    {
      title: 'Stores',
      link: 'list-stores'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
