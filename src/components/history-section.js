import { LitElement, html, css } from 'lit';

class HistorySection extends LitElement {
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
      <h2>HISTORY</h2>
      <p>Company history goes here</p>
    `;
  }
}

customElements.define('history-section', HistorySection);
