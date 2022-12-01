import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagetwo',
  templateUrl: './pagetwo.component.html',
  styleUrls: ['./pagetwo.component.scss']
})
export class PagetwoComponent implements OnInit {


  options: any;
  // overlays: any[];

  constructor() { }

  ngOnInit(): void {
    this.options = {
      center: { lat: 36.890257, lng: 30.707417 },
      zoom: 12
    };
  }


}
