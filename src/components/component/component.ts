/* eslint-disable no-unused-vars */
export type InsertPosition =
  | 'beforebegin'
  | 'afterbegin'
  | 'beforeend'
  | 'afterend';

export abstract class Component {
  selector!: string;
  element!: HTMLElement;
  template!: string;

  render(place: globalThis.InsertPosition) {
    this.element = document.querySelector(this.selector) as HTMLElement;
    this.element.insertAdjacentHTML(place, this.template);
  }
}
