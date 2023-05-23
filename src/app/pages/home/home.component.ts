import { Component } from '@angular/core';
import { User } from 'src/app/common/User';
import { Product } from 'src/app/common/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  user:User ={
    name:'linh',
    age:19,
    address:'VietNam'
    }
    products: Product[] =[
      {
        id:1,
      name:'iphone',
      price: 50000,
      image:'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/e/c/ecom.21.10_232__1.jpg',
      description:'iphone description'
    },
    {
      id:2,
    name:'iphone',
    price: 50000,
    image:'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/e/c/ecom.21.10_232__1.jpg',
    description:'iphone description'
  },
  {
    id:3,
  name:'iphone',
  price: 50000,
  image:'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/e/c/ecom.21.10_232__1.jpg',
  description:'iphone description'
},

      
    ]

}
