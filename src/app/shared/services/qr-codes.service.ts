import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {QrCode} from "../models/qr-code";
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class QrCodesService {
  qrCodeApi = 'https://api.qr-code-generator.com/v1/create/';
  constructor(private http: HttpClient) { }

  createQrCode(qrCode: QrCode) {
    return this.http.post(this.qrCodeApi, httpOptions)
  }
}
