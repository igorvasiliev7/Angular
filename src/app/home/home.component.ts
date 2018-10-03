import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name: string = 'Alex';
  item: string = 'Hello';
  names: string[] = ['Alex', 'Bob', 'Ann'];

  ngOnInit(){
    console.log('HomeComponent started')
  }

  test() {
    this.name = this.getName();
  }

  show() {
    this.name = 'Bob';
  }

 private getName(): string {
    return "Alex";
  }
}
