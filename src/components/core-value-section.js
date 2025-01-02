import { LitElement, html, css } from 'lit';
import './core-value/mission-section.js';
import './core-value/vision-section.js';
import './core-value/value-section.js';

class CoreValueSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 40px 20px;
      text-align: center;
      border-bottom: 1px solid #eee;
    }
  `;

  render() {
    return html`
      <h2>CORE VALUE</h2>
      <mission-section></mission-section>
      <vision-section></vision-section>
      <value-section></value-section>
    `;
  }
}

customElements.define('core-value-section', CoreValueSection);
