import {Component, Input, OnInit} from '@angular/core';
import {PropTable} from '../interfaces/interfaces';

@Component({
  selector: 'zt-grid-head',
  templateUrl: './zt-grid-head.component.html',
  styleUrls: ['./zt-grid-head.component.scss']
})
export class ZtGridHeadComponent implements OnInit {

  @Input() start: Array<PropTable> = [];
  @Input() container: Array<PropTable> = [];
  @Input() move: any = {};
  @Input() sizeStart: string = '100px';
  @Input() sizeContainer: string = '100px';

  constructor() { }

  ngOnInit() {
  }

}
