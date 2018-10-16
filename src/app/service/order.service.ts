import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {ResponseOrderDTO} from "../dto/response.order.dto";

const API: string = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  public findAll(page: number): Observable<ResponseOrderDTO> {
    return this.http.get<ResponseOrderDTO>(`${API}/order/findAll/${page}`);
  }
}
