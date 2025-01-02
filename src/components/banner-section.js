import { LitElement, html, css } from 'lit';

class BannerSection extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    
    .banner {
      background: #f8f8f8;
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;

  render() {
    return html`
      <div class="banner">
        Banner
      </div>
    `;
  }
}

customElements.define('banner-section', BannerSection);
