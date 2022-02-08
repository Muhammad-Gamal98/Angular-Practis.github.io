import { Injectable } from '@angular/core';
import { DiscountOffers } from '../Shared Classes and types/enums';
import { Iproduct } from '../Shared Classes and types/Interface';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  productList: Iproduct[];
  constructor() {
    this.productList = [
      {
        ID: 1,
        Name: 'Product1',
        Discount: DiscountOffers.NoDiscount,
        Quantity: 3,
        price: 300,
        Img: '../../assets/Photos/Ahlan w sahln - 1.jpg',
      },
      {
        ID: 2,
        Name: 'Product2',
        Discount: DiscountOffers.NoDiscount,
        Quantity: 5,
        price: 250,
        Img: '../../assets/Photos/Untitled-12.jpg',
      },
      {
        ID: 3,
        Name: 'Product3',
        Discount: DiscountOffers.fifteenprecent,
        Quantity: 6,
        price: 350,
        Img: '../../assets/Photos/Untitled-4.jpg',
      },
      {
        ID: 4,
        Name: 'Product4',
        Quantity: 6,
        Discount: DiscountOffers.tenprecent,
        price: 350,
        Img: '../../assets/Photos/Untitled-6.jpg',
      },
      {
        ID: 5,
        Name: 'Product5',
        Discount: DiscountOffers.tenprecent,
        Quantity: 6,
        price: 250,
        Img: '../../assets/Photos/Trollie - 01.jpg',
      },
    ];
  }
  getAllProducts() {
    return this.productList;
  }
  GetProductById(prdId: any): any {
    if (typeof prdId != 'number') return null;
    else {
      for (let i of this.productList) {
        if (i.ID === prdId) return i;
        else return null;
      }
    }
  }
}
