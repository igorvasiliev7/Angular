import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../service/category.service';
import {Category} from '../model/category';
import {Observable} from 'rxjs/index';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
  this.categoryService.findCategories('ua').subscribe((s: Category) => this.categories = s);
  }

}
