import { LitElement, html, css } from 'lit';

class VisionSection extends LitElement {
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
      <h3>Vision</h3>
      <p>Company vision goes here</p>
    `;
  }
}

customElements.define('vision-section', VisionSection);
