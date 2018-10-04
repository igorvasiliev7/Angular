
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {ProductDTO} from "../dto/product.dto";

const API: string = "https://api.mpp.net.ua/api";

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {

  }

  public findByCategory(id: number, page: number, lg: string): Observable<ProductDTO> {
    return this.http.get<ProductDTO>(`${API}/products/findByCategory/${id}/${page}/${lg}`);
  }
}
