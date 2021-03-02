

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  myForm: FormGroup;
  product:Product;
  isUpdate=false;
  selectedIndex:any;
  showForm=false;
  showExportOption=false;
  products=[

  ];
  constructor(){
    this.products=[];
    this.product =new Product();
    this.product.name="Samsung";
    this.product.productby="DG";
    this.product.price=100;
    this.products.push(this.product);
    var product1 =new Product();
    product1.name="Sony";
    product1.productby="SG";
    product1.price=700;
    this.products.push(product1);
  }
  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl(''),
      productby: new FormControl(''),
      price: new FormControl('')
     
    });
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('productby', form.value.productby);
    console.log('Message', form.value.price);

    if(this.isUpdate){
      this.products.forEach((element:Product,index) => {
        if(this.selectedIndex==index){
          this.products.splice(index,1);
        }
      });
    }
    
    var product1 =new Product();
    product1.name=form.value.name;
    product1.productby=form.value.productby;
    product1.price=form.value.price;
    this.products.push(product1);
  }
  export(){
    this.showExportOption=true;
    this.showForm=false;
  }
  addNew(){
    this.isUpdate=false;
    this.showForm=true;
    this.showExportOption=false;
    this.myForm.get('name').setValue('');
    this.myForm.get('productby').setValue('');
    this.myForm.get('price').setValue('');
  }

  update(product:Product,index){
    this.selectedIndex=index;
    this.showForm=true;
    this.isUpdate=true;
    this.showExportOption=false;
    this.myForm.get('name').setValue(product.name);
    this.myForm.get('productby').setValue(product.productby);
    this.myForm.get('price').setValue(product.price);
  }
  delete(selectedindex){
    this.selectedIndex=selectedindex;
    this.products.forEach((element:Product,index) => {
      if(this.selectedIndex==index){
        this.products.splice(index,1);
      }
    });
  }
}