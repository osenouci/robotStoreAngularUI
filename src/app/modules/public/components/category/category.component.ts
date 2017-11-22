import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { RequestService } from './../../../../services/request.service';

import { Category } from './../../classes/category';
import { MatSelectChange } from '@angular/material';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CategoryComponent implements OnInit {

  public categories: Array<Category> = new Array();
  public category:Category = null;
  private selectedCategory:number;
  
  @Output() categoryIdEmittor: EventEmitter<number> = new EventEmitter();

  constructor(protected requestService: RequestService) { }

  ngOnInit() {
    this.loadCategories();
  }

  async loadCategories() {

    try {

      let response:any= await this.requestService.get("/category").toPromise();

      if (response.body.status == true && response.body.data) {

        for(let entry of response.body.data) {
          this.categories.push(new Category(entry.id, entry.name, entry.total));
        }
      }

    } catch (err) {
      console.log(err);
    }
  }

  public selectCategory(categoryId:number|Category) {

    console.log(categoryId);

    if(categoryId instanceof Category) {
      this.category = categoryId;
      categoryId = (categoryId as Category).id;
    }

    if(!categoryId) {
      categoryId = 0;
      this.category = null;
    }

    this.selectedCategory = categoryId as number;
    this.categoryIdEmittor.emit(categoryId as number);
  }
  public isActive(categoryId:number):boolean {
    return this.selectedCategory == categoryId;
  }


  public getPlaceHolder():string {
    return this.category? "Categories" : "Show all robots";
  }
  
}