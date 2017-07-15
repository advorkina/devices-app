import { Component, OnInit } from '@angular/core';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { NavbarTitleService } from '../../lbd/services/navbar-title.service';
import { TableData } from '../../lbd/lbd-table/lbd-table.component';

@Component({
  selector: 'app-devices-list',
  templateUrl: 'devices-list.component.html',
  animations: [
    trigger('cardtable1', [
      state('*', style({
        '-ms-transform': 'translate3D(0px, 0px, 0px)',
        '-webkit-transform': 'translate3D(0px, 0px, 0px)',
        '-moz-transform': 'translate3D(0px, 0px, 0px)',
        '-o-transform': 'translate3D(0px, 0px, 0px)',
        transform: 'translate3D(0px, 0px, 0px)',
        opacity: 1
      })),
      transition('void => *', [
        style({
          opacity: 0,
          '-ms-transform': 'translate3D(0px, 150px, 0px)',
          '-webkit-transform': 'translate3D(0px, 150px, 0px)',
          '-moz-transform': 'translate3D(0px, 150px, 0px)',
          '-o-transform': 'translate3D(0px, 150px, 0px)',
          transform: 'translate3D(0px, 150px, 0px)',
        }),
        animate('0.3s 0s ease-out')
      ])
    ]),
  ]
})

export class DevicesListComponent implements OnInit {
  public tableData: TableData;

  constructor(private navbarTitleService: NavbarTitleService) {
  }

  public ngOnInit() {
    this.navbarTitleService.updateTitle('Table List');

    this.tableData = {
      headerRow: ['Devices', 'Total' ],
      dataRows: [
        ['Washing machine', '138 KW' ],
        ['Coffee', '12 KW' ],
        ['Microwave', '65 KW' ]
      ]
    };
  }
}
