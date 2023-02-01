/* eslint-disable no-unused-vars */
import { Component } from '../component/component';

export class Header extends Component {
  constructor(public selector: string, public title: string) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  createTemplate() {
    return `<header class='header'>${this.title}</header>`;
  }
}
