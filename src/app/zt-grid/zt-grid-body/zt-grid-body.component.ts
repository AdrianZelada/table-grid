import {AfterContentInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {PropTable} from '../interfaces/interfaces';
import {reduce} from 'rxjs/operators';
import {merge, Subject} from 'rxjs';

@Component({
  selector: 'zt-grid-body',
  templateUrl: './zt-grid-body.component.html',
  styleUrls: ['./zt-grid-body.component.scss']
})
export class ZtGridBodyComponent implements OnInit, AfterContentInit {

  _dataKey: Array<any> = [];
  // private dataOb: Subject<boolean> = new Subject<boolean>();
  // private dataOb: Subject<boolean> = new Subject<boolean>();
  // private createOb: Subject<boolean> = new Subject<boolean>();
  // private dataOb: Subject<boolean> = new Subject<boolean>();

  @Input() schema: Array<PropTable> = [];

  @Input() start: Array<PropTable> = [];
  @Input() container: Array<PropTable> = [];
  // @Input() dataKey: Array<any> = [];
  @Input() set dataKey(data) {
    if (data.length > 0) {
      this._dataKey = data;
    }
  }
  get dataKey() {
    return this._dataKey;
  }
  @Input() dataObj: any = {};
  @Input() sizeHeightContent: any ='800px';
  @Input() move: any = {};
  @Output() changesDom: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('content') content: ElementRef;
  statusChange: boolean = false;
  private changes: MutationObserver;

  constructor() { }

  ngOnInit() {
    // this.schema.push({
    //   prop: 'name',
    //   dock: true,
    // });
    //
    // const limit = 30;
    // for (let i = 0; i < limit; i++) {
    //   this.schema.push({
    //     prop: `p${i}`
    //   });
    // }
    //
    // this.schema.forEach((schema: PropTable) => {
    //   if (schema.dock) {
    //     this.startDock.push(schema);
    //   } else {
    //     this.container.push(schema);
    //   }
    // });
    //
    // this.dataObj = this.buildData(this.schema);
    // this.dataKey = Object.keys(this.dataObj);
    // console.log(this.dataObj);
    // console.log(this.dataKey);
  }

  ngAfterContentInit(): void {
    this.changes = new MutationObserver((mutations: MutationRecord[]) => {
        // console.error(mutations);
        // if (this.dataKey.length > 0 && !this.statusChange) {
        if (this.dataKey.length > 0 ) {
          this.changesDom.emit('created');
          this.changes.disconnect();
          // this.statusChange = true;
        }
        // mutations.forEach((mutation: MutationRecord) => {
        //   console.log(mutation);
        // });
      }
    );

    this.changes.observe(this.content.nativeElement , {
      attributes: true,
      childList: true,
      characterData: true,
      subtree: true
    });



    // merge()
  }

  // buildData(schema: Array<PropTable>) {
  //   const data = {};
  //   const limit = 30;
  //   const shapes = schema.reduce((result, sch: PropTable) => {
  //     return{
  //       ...result,
  //       [sch.prop]: ''
  //     };
  //   }, {});
  //   for (let i = 0; i < limit; i++) {
  //     let obj = {};
  //     Object.keys(shapes).forEach((key) => {
  //       obj[key] = i + 1;
  //     });
  //     let uuid = this.uuidv4(i);
  //     data[uuid] = {
  //       ...obj,
  //       _uuid: uuid
  //     };
  //   }
  //
  //   return data;
  // }

  // uuidv4(ind) {
  //   return `${ind}-xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g, function(c) {
  //     let r = Math.random() * 16 | 0, v = c == 'x' ? r : ( r & 0x3 | 0x8);
  //     return v.toString(16);
  //   });
  // }
}
