import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./b.ts";

@customElement("component-a")
export class A extends LitElement {
  @property({ type: Array, attribute: false }) items: string[] = [];

  public render() {
    return html`<component-b .items=${this.items}></component-b> `;
  }
}
