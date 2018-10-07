import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';
import {User} from '../model/user';
import {ProductService} from '../service/product.service';
import {ProductDTO} from '../dto/product.dto';
import {Product} from '../model/product';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];
  products: Product[];

  constructor(private userService: UserService,
              private productService: ProductService) { }

  ngOnInit() {

    this.productService.findByCategory(10, 0, 'ua').subscribe((s: ProductDTO) => {
      this.products = s.products;
    });
  }
}
