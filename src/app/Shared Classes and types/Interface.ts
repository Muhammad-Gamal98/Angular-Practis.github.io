import { DiscountOffers } from "./enums";

export interface Iproduct {
  ID: number;
  Name: string;
  Quantity: number;
  price: number;
  Img: string;
  Discount: DiscountOffers;
}
export interface ICategory{
    ID:number;
    Name:string;
}
export interface Iusers{
    name: string;
    userName: string;
    email: string;
}
export interface Iposts{
    id: number,
    title: string,
    body:string
}