/* eslint-disable no-unused-vars */
import { Component } from '../component/component';

export class Footer extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('afterend');
  }

  createTemplate() {
    return `
     <footer>
      <p>Gracias por visitar nuestra pagina</p>
    </footer>`;
  }
}
