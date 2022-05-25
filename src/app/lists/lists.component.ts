import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent {
@Input()prodList:any;
newProduct:any;
add(index:number)
{
 // this.prodList.push(this.newProduct)
 this.prodList.unshift(this.newProduct)
 localStorage.setItem('item',JSON.stringify(this.prodList))
this.newProduct=null;
}

}
