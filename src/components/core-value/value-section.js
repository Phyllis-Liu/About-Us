import { LitElement, html, css } from 'lit';

class ValueSection extends LitElement {
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
      <h3>Value</h3>
      <p>Company values go here</p>
    `;
  }
}

customElements.define('value-section', ValueSection);
