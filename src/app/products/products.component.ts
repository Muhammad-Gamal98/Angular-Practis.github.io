import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../Shared Classes and types/enums';
import { ICategory, Iproduct } from '../Shared Classes and types/Interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  Discount: DiscountOffers;
  storeName: string;
  storeLogo: string;
  productList: Iproduct[];
  clientName: string;
  categoryList: ICategory[];
  isPurshased: boolean;
  constructor() {
    this.Discount = DiscountOffers.fifteenprecent;
    this.storeName = 'Arket';
    this.storeLogo = '../../assets/Photos/Trollie -1.jpg';
    this.productList = [
      {
        ID: 1,
        Name: 'Product1',
        Quantity: 3,
        price: 300,
        Img: '../../assets/Photos/Ahlan w sahln - 1.jpg',
      },
      {
        ID: 2,
        Name: 'Product2',
        Quantity: 5,
        price: 250,
        Img: '../../assets/Photos/Untitled-12.jpg',
      },
      {
        ID: 3,
        Name: 'Product3',
        Quantity: 6,
        price: 350,
        Img: '../../assets/Photos/Untitled-4.jpg',
      },
      {
        ID: 4,
        Name: 'Product4',
        Quantity: 6,
        price: 350,
        Img: '../../assets/Photos/Untitled-6.jpg',
      },
      {
        ID: 5,
        Name: 'Product5',
        Quantity: 6,
        price: 250,
        Img: '../../assets/Photos/Trollie - 01.jpg',
      },
    ];
    this.clientName = 'Gamal';
    this.isPurshased = false;
    this.categoryList = [
      { ID: 1, Name: 'Category1' },
      { ID: 2, Name: 'Category2' },
    ];
  }

  ngOnInit(): void {}
  onclick() {
    if (this.isPurshased) {
      this.isPurshased = false;
    } else this.isPurshased = true;
  }
}
