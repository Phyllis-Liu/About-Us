import { LitElement, html, css } from 'lit';

class ManagementWords extends LitElement {
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
      <h2>Words from the Management</h2>
      <p>Management message goes here</p>
    `;
  }
}

customElements.define('management-words', ManagementWords);
