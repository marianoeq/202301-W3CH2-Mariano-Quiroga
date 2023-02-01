/* eslint-disable no-unused-expressions */
/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
import { PET } from '../../mock/petData';
import { Add } from '../addItem/addItem';
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
        `
      <div class='cards'>
      <li>${el.name}</li>
      <li>${el.breed}</li>
      <li>${el.owner}</li>
      <li>${el.isAdopted}</li>
      ${new Add('#app')};
      </div>
      `
    ).join('');
    return `
    <div>
    <ul>${pet}</ul>
    </div>
    `;
  }
}
