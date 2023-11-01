import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./d.ts";

@customElement("component-c")
export class C extends LitElement {
  @property({ type: Array }) items: string[];

  constructor(items: string[]) {
    super();
    this.items = items;
  }

  public render() {
    return html`<component-d .items=${this.items}></component-d> `;
  }
}
