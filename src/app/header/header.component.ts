import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lol-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() titulo: string;
  constructor() { }

  ngOnInit() {
  }

}
