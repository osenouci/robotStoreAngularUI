import { Pipe, PipeTransform } from '@angular/core';
import { Robot } from './../classes/robot';
@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {

  transform(value: any, categoryId: number): any {

    if(categoryId == 0) { // Show all
      return value;
    }

    return value.filter((robot:Robot) => robot.categoryId == categoryId); // Filter by category
  }

}
