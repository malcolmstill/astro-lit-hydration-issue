import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("component-b")
export class B extends LitElement {
  @property({ type: Array }) items: string[] = [];

  public render() {
    return html`
      ${this.items.map((item) => html`<div class="item iconed">${item}</div>`)}
    `;
  }
}
