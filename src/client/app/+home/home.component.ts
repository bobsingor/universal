// angular
import { Component } from '@angular/core';

// framework
import { BaseComponent } from '~/app/framework/core/core.module';

// app
import { routeAnimation } from '~/app/app.animations';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['home.component.scss'],
  animations: [routeAnimation]
})
export class HomeComponent extends BaseComponent {
  view: any[] = [700, 400];

  data: any[] = [{
    "name": "TestData",
    "series": [
      {
        "value": 105,
        "name": "2018-09-03T00:00:00.000Z"
      },
      {
        "value": 107,
        "name": "2018-09-04T00:00:00.000Z"
      },
      {
        "value": 96,
        "name": "2018-09-05T00:00:00.000Z"
      },
      {
        "value": 95,
        "name": "2018-09-06T00:00:00.000Z"
      },
      {
        "value": 105,
        "name": "2018-09-07T00:00:00.000Z"
      },
      {
        "value": 105,
        "name": "2018-09-08T00:00:00.000Z"
      },
      {
        "value": 102,
        "name": "2018-09-09T00:00:00.000Z"
      },
      {
        "value": 121,
        "name": "2018-09-10T00:00:00.000Z"
      },
      {
        "value": 107,
        "name": "2018-09-11T00:00:00.000Z"
      },
      {
        "value": 108,
        "name": "2018-09-12T00:00:00.000Z"
      }
    ]
  }]

  showXAxis = true;
  showYAxis = true;
  showGridLines = false;
  gradient = false;
  showXAxisLabel = false;
  showYAxisLabel = false;
  timeline = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  autoScale = true;
}
