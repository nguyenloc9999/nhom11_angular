import { Component } from '@angular/core';

import { Product } from 'src/app/common/product';
import products from 'src/app/data/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  products = products
}
