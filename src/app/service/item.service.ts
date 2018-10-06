import {Injectable} from "@angular/core";
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";
import {Item} from "../model/item";
import {ItemDTO} from "../dto/itemDTO";

const API: string = "https://api.mpp.net.ua/api";

@Injectable()
export class ItemService {

  constructor(private http: HttpClient) {
  }

  public findOne(id:number, lg: string): Observable<ItemDTO> {
    return this.http.get<ItemDTO>(`${API}/products/findOne/${id}/${lg}`);
  }
}
