import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagetwo',
  templateUrl: './pagetwo.component.html',
  styleUrls: ['./pagetwo.component.scss']
})
export class PagetwoComponent {
  data: any;

  chartOptions: any;

  ngOnInit() {
    this.data = {
      labels: ['tank', 'dps', 'support', 'flex', 'toxic'],
      datasets: [
        {
          label: 'LOL',
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [80, 100, 50, 70, 0]
        },
        {
          label: 'Overwatch 2',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: [90, 80, 40, 40, 0]
        }
      ]
    };

  }

}
