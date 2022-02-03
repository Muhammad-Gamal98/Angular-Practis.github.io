import { ProductsComponent } from './products/products.component';
import { Component, ViewChild } from '@angular/core';
import { DiscountOffers } from './Shared Classes and types/enums';
import { ICategory, Iproduct } from './Shared Classes and types/Interface';

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(ProductsComponent) child!: ProductsComponent;


  
  onclick() {
    this.child.onclick();
  }

  title = 'start_Project';
}
