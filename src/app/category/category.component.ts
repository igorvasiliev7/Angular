import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../service/category.service";
import {Category} from "../model/category";
import {CategoryDTO} from "../dto/categoryDTO";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories:Category[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.findCategories("ua").subscribe((s:CategoryDTO) =>{
      this.categories=s.categories;
    })
  }

}
