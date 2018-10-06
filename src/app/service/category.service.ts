import {Injectable} from "@angular/core";
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";
import {CategoryDTO} from "../dto/categoryDTO";


const API: string = "https://api.mpp.net.ua/api";

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  public findCategories(lg: string): Observable<CategoryDTO> {
    return this.http.get<CategoryDTO>(`${API}/categories/findAll?language=${lg}`);
  }
}
