import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import {Item} from '../model/item';

const API = 'https://api.mpp.net.ua/api';

@Injectable()
export class ItemService {

  constructor(private http: HttpClient) {
  }

  public findOne(id: number, lg: string): Observable<Item> {
    return this.http.get<Item>(`${API}/products/findOne/${id}/${lg}`);
  }
}
