import { Component, OnInit} from '@angular/core';
import { DataService } from '../../service/data.service';


//import { Product } from './../../interfaces/product'; 

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products:any = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log('hello product');
    this.dataService.sendGetRequest().subscribe((data)=>{
      console.log(data);
      this.products = data;
    })  
  }
}