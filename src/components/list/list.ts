/* eslint-disable no-unused-expressions */
/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
import { PET } from '../../mock/petData';
import { Component } from '../component/component';
export class List extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('beforeend');
  }

  createTemplate() {
    const pet = PET.map(
      (el) =>
        `<li>${el.name}</li>
      <li>${el.breed}</li>
      <li>${el.owner}</li>
      <li>${el.isAdopted}</li>
      `
    );
    return `
    <div>
    <ul>${pet}</ul>
    </div>
    `;
  }
}
