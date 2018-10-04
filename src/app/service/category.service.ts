import {Injectable} from "@angular/core";
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";
import {Category} from "../model/category";


const API: string = "https://api.mpp.net.ua/api";

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  public findCategories(id: number, page: number, imageUrl: string, text: string): Observable<Category> {
    return this.http.get<Category>(`${API}/products/findByCategory/${id}/${page}/${lg}`);
  }
}
