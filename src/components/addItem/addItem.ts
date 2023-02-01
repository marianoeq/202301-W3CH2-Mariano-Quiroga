/* eslint-disable no-unused-vars */
import { Component } from '../component/component';

export class Add extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('beforeend');
  }

  createTemplate() {
    return `<button>Click</button>`;
  }
}
