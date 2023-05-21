import { Component } from '@angular/core';
import products from '../../../app/data/product';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.css']
})
export class DetailpageComponent {
  products = products; 
}
