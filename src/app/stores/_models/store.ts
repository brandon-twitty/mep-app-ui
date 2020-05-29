import {Deserializable} from '../../shared/models/deserializable.model';

export class Store  {
    ID: number;
    storeOwnerId: any;
    storeContactName: string;
    storeAddress: string;
    city: string;
    storePhoneNumber: number;
    storeEmail: string;
    storeCommissionRate: number;
    createdDate: any;

  constructor(ID?: number, storeOwnerId?: any, storeContactName?: string, storeAddress?: string, storePhoneNumber?: number, storeEmail?: string, storeCommissionRate?: number, createdDate?: any, city?: string) {
    this.ID = storePhoneNumber;
    this.storeOwnerId = storeOwnerId;
    this.storeContactName = storeContactName;
    this.storeAddress = storeAddress;
    this.storePhoneNumber = storePhoneNumber;
    this.storeEmail = storeEmail;
    this.storeCommissionRate = storeCommissionRate;
    this.createdDate = createdDate;
    this.city = city;
  }

  /*deserialize(input: any): this {
    return Object.assign(this, input);
  }*/
}
