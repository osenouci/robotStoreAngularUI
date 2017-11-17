import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { RequestService } from './../../../../services/request.service';
import { Photo } from './../../classes/photo';

import { Category } from './../../classes/category';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddComponent {

  public isLoading: boolean = false;

  public categories: Array<Category> = new Array();

  // Define form models fields  
  public name: string;         // The robot's name
  public description: string;  // The robot's description
  public price: string;        // The robot's price
  public category: number;     // The category id
  public photos:Array<Photo> = new Array();

  // Define form elements
  public addForm: FormGroup;
  public nameFormControl: FormControl;
  public descriptionFormControl: FormControl;
  public priceFormControl: FormControl;
  public categoryFormControl: FormControl;

  constructor(private requestService: RequestService, private router: Router) {

    this.nameFormControl = new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(80)]);
    this.descriptionFormControl = new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(2500)]);
    this.priceFormControl = new FormControl('', [Validators.required, Validators.min(1), Validators.max(100000)]);
    this.categoryFormControl = new FormControl('', [Validators.required]);

    this.addForm = new FormGroup({ name: this.nameFormControl, description: this.descriptionFormControl, price: this.priceFormControl, category: this.categoryFormControl });


    this.loadCategories();  // Load the categories
  }

  async loadCategories() {

    try {

      let response: any = await this.requestService.get("/category").toPromise();

      if (response.body.status == true && response.body.data) {

        for (let entry of response.body.data) {
          this.categories.push(new Category(entry.id, entry.name, entry.total));
        }
      }

    } catch (err) {
      console.log(err);
    }
  }



  public addNewPhoto(){

    let url = prompt("Please enter a URL of the robot's photo", "");
    
    if (url) {

      if(this.isURLValid(url)) {
        this.photos.push(new Photo(url));
      } else{
        alert("Invalid URL");
      }
    }
  }


  public async submit() {

    if(this.isLoading) {
      return;
    }

    this.isLoading = true;

    try {

      // Format the data
      const data = {
        name: this.name,
        description: this.description,
        price: this.price as any,
        category: { id: this.category},
        photos: this.photos
      };

      let response: any = await this.requestService.post("/robot", data).toPromise();

      if(!response.body.status) {

        if(!Array.isArray(response.body.error) || response.body.error.length == 0) {
          throw new Error();
        }

        let message:string = "Please correct the following errors: \n";
        for(let err of response.body.error) {
          message += `${err.field} -> ${err.message}`;
        }

        alert(message);

      } else {
        this.router.navigate([""]);
      }



      this.isLoading = false;

    } catch(err) {

      this.isLoading = false;
      alert("An error occured while trying to add your new robot. Please try again.");
      console.log(err);
    }


  }

  private isURLValid(str:string):Boolean {
    let regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    return !regex .test(str) ? false : true;
  }  


}
