import {Component, Input, OnInit} from '@angular/core';
import {PropTable} from '../interfaces/interfaces';

@Component({
  selector: 'zt-grid',
  templateUrl: './zt-grid.component.html',
  styleUrls: ['./zt-grid.component.scss']
})
export class ZtGridComponent implements OnInit {

  _data: Array<any> = [];
  @Input() schema: Array<PropTable> = [];
  @Input() set data(res: Array<any>) {
    if (res.length > 0) {
      this._data = res;
      this.dataObj = this.generateUuid(this._data);
      this.dataKey = Object.keys(this.dataObj);
    }
  }
  get data() {
    return this._data;
  }
  startDock: Array<PropTable> = [];
  container: Array<PropTable> = [];
  dataKey: Array<any> = [];
  dataObj: any = {};
  sizeStart: any;
  sizeContent: any;
  sizeHeightContent: any;
  move: any = this.transformScroll(0);
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

    this.schema.forEach((schema: PropTable) => {
      if (schema.dock) {
        this.startDock.push(schema);
      } else {
        this.container.push(schema);
      }
    });
    // setTimeout(() => {
    //   this.dataObj = this.buildData(this.schema);
    //   this.dataKey = Object.keys(this.dataObj);
    // }, 100);



    // console.log(this.dataObj);
    // console.log(this.dataKey);
    // let startWidth = 0;
    // let conWidth = 0;
    // setTimeout(() => {
    //   this.startDock.forEach((obj: any) => {
    //     const els = document.getElementsByClassName(`s_${obj.prop}`);
    //     let r = 0;
    //     Array.prototype.forEach.call(els, (el: any) => {
    //       r = el.offsetWidth > r ? el.offsetWidth : r;
    //     });
    //     startWidth += r;
    //     obj.width = `${r}px`;
    //
    //   });
    //
    //   this.container.forEach((obj: any) => {
    //     const els = document.getElementsByClassName(`c_${obj.prop}`);
    //     let r = 0;
    //     Array.prototype.forEach.call(els, (el: any) => {
    //       r = el.offsetWidth > r ? el.offsetWidth : r;
    //     });
    //     conWidth += r;
    //     obj.width = `${r}px`;
    //   });
    //
    //   console.log('startWidth conWidth');
    //   console.log(startWidth);
    //   console.log(conWidth);
    //   this.sizeContent = `${conWidth}px`;
    //   this.sizeStart = `${startWidth}px`;
    // }, 500);
  }

  change(status: string) {
    // console.log(status);
    if (status === 'created') {
      this.resizeGrid();
    }
  }

  resizeGrid() {
    let startWidth = 0;
    let conWidth = 0;
    let conHeight = 0;
    this.startDock.forEach((obj: any) => {
      const els = document.getElementsByClassName(`s_${obj.prop}`);
      let r = 0;
      Array.prototype.forEach.call(els, (el: any) => {
        r = el.offsetWidth > r ? el.offsetWidth : r;
      });
      startWidth += r;
      obj.width = `${r}px`;

    });
    this.container.forEach((obj: any) => {
      const els = document.getElementsByClassName(`c_${obj.prop}`);
      let r = 0;
      Array.prototype.forEach.call(els, (el: any) => {
        r = el.offsetWidth > r ? el.offsetWidth : r;
      });
      conWidth += r;
      obj.width = `${r}px`;
    });

    console.log('startWidth conWidth');
    console.log(startWidth);
    console.log(conWidth);
    this.sizeContent = `${conWidth}px`;
    this.sizeStart = `${startWidth}px`;
    this.sizeHeightContent = `${56 * this.dataKey.length}px`;
  }


  transformScroll(size: number) {
    return {transform: `translatex(-${size}px)`};
  }

  buildData(schema: Array<PropTable>) {
    const data = {};
    const limit = 30;
    const shapes = schema.reduce((result, sch: PropTable) => {
      return{
        ...result,
        [sch.prop]: ''
      };
    }, {});
    for (let i = 0; i < limit; i++) {
      let obj = {};
      Object.keys(shapes).forEach((key) => {
        obj[key] = `${key}asd${i}12312312312312`;
      });
      let uuid = this.uuidv4(i);
      data[uuid] = {
        ...obj,
        _uuid: uuid
      };
    }

    return data;
  }

  generateUuid(list: Array<any>) {
    let data = {};
    for (let i = 0; i < list.length; i++) {
      let obj = list[i];
      // Object.keys(shapes).forEach((key) => {
      //   obj[key] = `${key}asd${i}12312312312312`;
      // });
      const uuid = this.uuidv4(i);
      data[uuid] = {
        ...obj,
        _uuid: uuid
      };
    }
    return data;
  }

  uuidv4(ind) {
    return `${ind}-xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g, function(c) {
      let r = Math.random() * 16 | 0, v = c == 'x' ? r : ( r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  changeScroll(e) {
    // console.log(e);
    // this.move = e.target.scrollLeft;
    this.move = this.transformScroll(e.target.scrollLeft);
  }

}
