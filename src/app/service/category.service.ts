import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import {CategoryDTO} from '../dto/categoryDTO';
import {Category} from '../model/category';


const API = 'https://api.mpp.net.ua/api';

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  public findCategories(lg: string): Observable<Category> {
    return this.http.get<Category>(`${API}/categories/findAll?language=${lg}`);
  }
}
