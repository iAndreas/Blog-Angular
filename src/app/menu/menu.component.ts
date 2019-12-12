import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lol-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  titulo = 'Menu';
  constructor() { }

  ngOnInit() {
  }

}
