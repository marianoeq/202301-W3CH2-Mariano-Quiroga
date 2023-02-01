/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unreachable */
import { Add } from '../addItem/addItem';
import { Component } from '../component/component';

export class Form extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('beforeend');
  }

  createTemplate() {
    return `<form>
      <label>Name</label>
      <input id='name' type="text">
      <label>Breed</label>
      <input id='breed' type="text">
      <label for="r1">Adopted</label>
      <input type="radio" name="pet" id="p1">
      <label for="r2">Not Adopted</label>
      <input type="radio" name="pet" id="p2">
      <label>Owner</label>
      <input id='owner' type="text">
    ${new Add('#app')}
      </form>
    `;
  }
}
