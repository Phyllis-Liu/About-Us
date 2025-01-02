import { LitElement, html, css } from 'lit';

class BannerSection extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    
    .banner {
      position: relative;
      width: 100%;
      height: 600px;
      background-color: #fff;
      display: flex;
      align-items: center;
      overflow: hidden;
    }

    .banner-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.1;
      pointer-events: none;
    }

    .banner-content {
      position: relative;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
      width: 100%;
      z-index: 1;
    }

    .title {
      font-size: 48px;
      font-weight: bold;
      line-height: 1.2;
      margin: 0 0 20px 0;
      max-width: 600px;
      color: #000;
    }

    .subtitle {
      font-size: 24px;
      color: #666;
      margin: 0;
      max-width: 500px;
    }

    .slider-dots {
      position: absolute;
      bottom: 40px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 10px;
      z-index: 1;
    }

    .dot {
      width: 30px;
      height: 3px;
      background-color: #ccc;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .dot.active {
      background-color: #ff0000;
    }
  `;

  render() {
    return html`
      <div class="banner">
        <svg class="banner-background" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#000" stroke-width="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
        </svg>

        <div class="banner-content">
          <h1 class="title">RELIABLE COMPANIONS THAT BOOST YOUR SYSTEM INTEGRATION</h1>
          <p class="subtitle">STRENGTHENING THE PERFORMANCE OF YOUR SOLUTIONS</p>
        </div>

        <div class="slider-dots">
          <div class="dot"></div>
          <div class="dot active"></div>
          <div class="dot"></div>
        </div>
      </div>
    `;
  }
}

customElements.define('banner-section', BannerSection);
