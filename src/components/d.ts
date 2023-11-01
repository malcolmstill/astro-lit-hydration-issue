import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("component-d")
export class D extends LitElement {
  @property() name = "";
  @property({ type: Array, attribute: false }) items: string[];

  constructor(items: string[]) {
    super();
    this.items = items;
  }

  public render() {
    return html`
      ${this.items.map((item) => html`<div class="item iconed">${item}</div>`)}
    `;
  }
}
