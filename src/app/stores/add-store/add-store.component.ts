import {ChangeDetectionStrategy, Component, EventEmitter, Input, NgZone, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {StoreService} from "../../shared/services/store.service";
import {Store} from "..";
import {Owner} from "../../owners/create-owner/_models/owner";

import {Appointment} from "../../shared/models/appointment";
import {QrCode} from "../../shared/models/qr-code";
import {QrCodesService} from "../../shared/services/qr-codes.service";

@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddStoreComponent implements OnInit {
  storeForm: FormGroup;
  newStore: Store = new Store;
  newQrCode: QrCode;
  appointments: Appointment[];
  appointment = new Appointment();
  @Input() index: number;
  @Input() ID: any;
  @Output() deleteStore: EventEmitter<number> = new EventEmitter();


  constructor(private qrCodesService: QrCodesService, private fb: FormBuilder, private router: Router, private storeService: StoreService, private activeRoute: ActivatedRoute, private ngZone: NgZone) { }

  ngOnInit(): void {
    console.log('storeOwnerId', this.ID);

    this.addStoreForm();

  }

  addStoreForm(){
    this.storeForm = this.fb.group({
    ID: [''],
    storeOwnerId: [''],
    storeContactName: [''],
    storeAddress: [''],
    city: [''],
    storePhoneNumber: [''],
    storeEmail: [''],
    storeCommissionRate: ['']
    })
  }
  formatDate(e) {
    let convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.storeForm.get('dob').setValue(convertDate, {
      onlyself: true
    })
  }

  submitStoreForm(){
    this.newStore = this.storeForm.value;
    this.newStore.ID = this.storeForm.controls.storePhoneNumber.value;
    this.newStore.storeOwnerId = this.ID;
    console.log(this.newStore);

      this.saveStore();


    return this.newStore;
  }
  generateQrCode(){
    this.newQrCode.access_token = "WaIHit69s5B0vZ6nR5s6yqdZZCHllTV1LTf2cPEg1BVypuqTPJHnVJ77unoLD23Q";
    this.newQrCode.qr_code_text = "https://medical.cards/?storeId=" + this.newStore.storePhoneNumber;
    this.newQrCode.image_format = "PNG";
    this.newQrCode.image_width = 500;
    this.newQrCode.download = false;
    this.qrCodesService.createQrCode(this.newQrCode).subscribe(
      data => {
        console.log(data)
      }
    )
  }
  saveStore() {
    this.newStore.createdDate = new Date();
    this.generateQrCode();
    this.storeService.createStore(this.newStore)
      .subscribe(data => {
        console.log(this.newStore);
        this.storeForm.reset();

      });
  }
  /*saveStore(){
    Object.keys(this.ID).some(key => {
      let ownerId = this.ID[key];
      console.log('Object Id = ', ownerId);
      this.newStore.storeOwnerId = ownerId;
      return this.newStore.storeOwnerId = ownerId;
    });
    if (this.newStore.storeOwnerId !== null){
      this.storeService.createStore(this.newStore)
        .subscribe(data => {
          console.log(this.newStore);
          this.storeForm.reset();
        })
    } else {
      console.log('storeOwnerId was null')
    }
  }*/
  delete() {
    this.deleteStore.emit(this.index);
  }

}
