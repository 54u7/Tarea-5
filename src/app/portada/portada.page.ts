import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();


@Component({
  selector: 'app-portada',
  templateUrl: './portada.page.html',
  styleUrls: ['./portada.page.scss'],
})
export class PortadaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
