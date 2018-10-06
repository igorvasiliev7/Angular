import { Component, OnInit } from '@angular/core';
import {ItemService} from "../service/item.service";
import {Item} from "../model/item";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  items:Item[];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.items=this.itemService.findOne(74,"ua");

}
}
