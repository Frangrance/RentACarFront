import { Injectable } from '@angular/core';
import { Card } from '../models/entities/card';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responses/responseModel';
import { ListResponseModel } from '../models/responses/listResponseModel';

@Injectable({
   providedIn: 'root'
})
export class CardService {

   private apiUrl = 'http://localhost:62884/api/cards/';

   constructor(private httpClient: HttpClient) {
   }

   add(card: Card): Observable<ResponseModel> {
      return this.httpClient.post<ResponseModel>(this.apiUrl, card);
   }

   getByCustomerId(customerId: number): Observable<ListResponseModel<Card>> {
      let getByCustomerPath = this.apiUrl + 'get-by-customerId?customerId=' + customerId;
      return this.httpClient.get<ListResponseModel<Card>>(getByCustomerPath);
   }
}
