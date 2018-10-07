import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../service/category.service';
import {Category} from '../model/category';
import {Observable} from "rxjs/index";


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Observable<Category[]>;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
   this.categories = this.categoryService.findCategories('ua');
  }

}
