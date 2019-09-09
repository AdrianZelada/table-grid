import {Component, Input, OnInit} from '@angular/core';
import {PropTable} from './zt-grid/interfaces/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'data-ag-table';
  schema: Array<PropTable> = [];
  data: Array<any> = [];
  constructor() {
    this.schema.push({
      prop: 'name',
      dock: true,
    });

    const limit = 30;
    for (let i = 0; i < limit; i++) {
      this.schema.push({
        prop: `p${i}`
      });
    }
    // setTimeout(() => {
      this.data = this.buildData(this.schema);
    // }, 10);

  }

  ngOnInit(): void {
  }

  buildData(schema: Array<PropTable>) {
    const data = [];
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
      // let uuid = this.uuidv4(i);
      // data[uuid] = {
      //   ...obj,
      //   _uuid: uuid
      // };
      data.push(obj);
    }

    return data;
  }
}
