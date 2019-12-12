import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lol-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  titulo="footer teste"
  constructor() { }

  ngOnInit() {
  }

}
