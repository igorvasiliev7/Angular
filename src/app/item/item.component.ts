import { Component, OnInit } from '@angular/core';
import {ItemService} from '../service/item.service';
import {Item} from '../model/item';
import {Observable} from 'rxjs/index';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  item: Observable<Item>;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.findOne(74, 'ua').subscribe((s: Item) => this.item = s);

}
}
