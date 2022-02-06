export interface Iproduct {
    ID: number;
    Name: string;
    Quantity: number;
    price: number;
    Img: string;
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