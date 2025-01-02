import { LitElement, html, css } from 'lit';

class MissionSection extends LitElement {
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
      <h3>Mission</h3>
      <p>Company mission goes here</p>
    `;
  }
}

customElements.define('mission-section', MissionSection);
