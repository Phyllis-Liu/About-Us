import { LitElement, html, css } from 'lit';

class AboutHeader extends LitElement {
  static properties = {
    activeTab: { type: String }
  };

  constructor() {
    super();
    this.activeTab = 'about';
  }

  static styles = css`
    :host {
      display: block;
      background-color: #f2f2f2;
    }

    .hero-section {
      padding: 60px 20px;
      text-align: center;
      margin: 0;
    }

    .hero-title {
      font-size: 32px;
      margin: 0 0 20px 0;
      font-weight: bold;
    }

    .hero-subtitle {
      font-size: 18px;
      margin: 0;
      color: #333;
    }

    .nav-container {
      padding-bottom: 20px;
    }

    .nav {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      max-width: 1200px;
      margin: 0 auto;
      padding: 15px;
      position: relative;
    }

    .nav-item {
      cursor: pointer;
      font-weight: bold;
      padding: 8px 16px;
      transition: all 0.2s ease;
      position: relative;
      color: #666;
      text-align: center;
      border: none;
      background: none;
      font-size: 16px;
      will-change: transform, color;
    }

    .nav-item:nth-child(1) {
      grid-column: 2;
    }

    .nav-item:nth-child(2) {
      grid-column: 4;
    }

    .nav-item:nth-child(3) {
      grid-column: 6;
    }

    .nav-item::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: transparent;
      transition: background-color 0.2s ease;
      will-change: background-color;
    }

    .nav-item:hover {
      color: #B32F23;
    }

    .nav-item:hover::after {
      background-color: #B32F23;
    }

    @keyframes jello {
      from,
      11.1%,
      to {
        transform: translate3d(0, 0, 0);
      }

      22.2% {
        transform: skewX(-12.5deg) skewY(-12.5deg);
      }

      33.3% {
        transform: skewX(6.25deg) skewY(6.25deg);
      }

      44.4% {
        transform: skewX(-3.125deg) skewY(-3.125deg);
      }

      55.5% {
        transform: skewX(1.5625deg) skewY(1.5625deg);
      }

      66.6% {
        transform: skewX(-0.78125deg) skewY(-0.78125deg);
      }

      77.7% {
        transform: skewX(0.390625deg) skewY(0.390625deg);
      }

      88.8% {
        transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
      }
    }

    .jello {
      animation: jello 0.8s cubic-bezier(0.215, 0.61, 0.355, 1);
      transform-origin: center;
      backface-visibility: hidden;
      perspective: 1000px;
      transform: translateZ(0);
    }
  `;

  setActiveTab(tab) {
    const clickedButton = this.shadowRoot.querySelector(`.nav-item[data-tab="${tab}"]`);
    if (clickedButton) {
      // 使用 Web Animations API 來實現更高效的動畫
      clickedButton.animate(
        [
          { transform: 'translate3d(0, 0, 0)' },
          { transform: 'skewX(-12.5deg) skewY(-12.5deg)', offset: 0.222 },
          { transform: 'skewX(6.25deg) skewY(6.25deg)', offset: 0.333 },
          { transform: 'skewX(-3.125deg) skewY(-3.125deg)', offset: 0.444 },
          { transform: 'skewX(1.5625deg) skewY(1.5625deg)', offset: 0.555 },
          { transform: 'skewX(-0.78125deg) skewY(-0.78125deg)', offset: 0.666 },
          { transform: 'skewX(0.390625deg) skewY(0.390625deg)', offset: 0.777 },
          { transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)', offset: 0.888 },
          { transform: 'translate3d(0, 0, 0)' }
        ],
        {
          duration: 800,
          easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
          fill: 'forwards'
        }
      );
    }

    this.activeTab = tab;
    this.dispatchEvent(new CustomEvent('tab-change', { 
      detail: { tab },
      bubbles: true, 
      composed: true 
    }));
  }

  render() {
    return html`
      <div class="hero-section">
        <h2 class="hero-title">ABOUT US</h2>
        <p class="hero-subtitle">LEADING THE CHANGE IN CASH TECH INNOVATION</p>
      </div>

      <div class="nav-container">
        <div class="nav">
          <button 
            class="nav-item"
            @click="${() => this.setActiveTab('about')}"
            data-tab="about"
          >ABOUT</button>
          <button 
            class="nav-item"
            @click="${() => this.setActiveTab('history')}"
            data-tab="history"
          >HISTORY</button>
          <button 
            class="nav-item"
            @click="${() => this.setActiveTab('core-value')}"
            data-tab="core-value"
          >CORE VALUE</button>
        </div>
      </div>
    `;
  }
}

customElements.define('about-header', AboutHeader);
