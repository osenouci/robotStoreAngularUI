import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RequestService } from './../../../../../../services/request.service';

import { Category } from './../../../../classes/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CategoryComponent implements OnInit {

  protected categories: Array<Category> = new Array();

  constructor(protected requestService: RequestService) { }



  ngOnInit() {
    console.log("Loading the categories");
    this.loadCategories();
  }

  async loadCategories() {

    try {

      let response:any= await this.requestService.get("/category").toPromise();

      if (response.body.status == true && response.body.data) {

        for(let entry of response.body.data) {
          this.categories.push(new Category(entry.name, entry.id));
        }

        console.log(this.categories);

      }


    } catch (err) {
      console.log(err);
    }

  }
}
