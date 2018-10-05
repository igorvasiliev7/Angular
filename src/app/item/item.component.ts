import { Component, OnInit } from '@angular/core';
import {ItemService} from "../service/item.service";
import {Item} from "../model/item";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  item:Item;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.item=this.itemService.findOne(74,"ua");

}
}
