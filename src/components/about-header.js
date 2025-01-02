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
      transition: all 0.3s ease;
      position: relative;
      color: #666;
      text-align: center;
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

    .nav-item:hover {
      color: #000;
    }

    .nav-item.active {
      color: #000;
    }

    .nav-item.active::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #000;
      transition: all 0.3s ease;
    }
  `;

  setActiveTab(tab) {
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
          <div 
            class="nav-item ${this.activeTab === 'about' ? 'active' : ''}"
            @click="${() => this.setActiveTab('about')}"
          >ABOUT</div>
          <div 
            class="nav-item ${this.activeTab === 'history' ? 'active' : ''}"
            @click="${() => this.setActiveTab('history')}"
          >HISTORY</div>
          <div 
            class="nav-item ${this.activeTab === 'core-value' ? 'active' : ''}"
            @click="${() => this.setActiveTab('core-value')}"
          >CORE VALUE</div>
        </div>
      </div>
    `;
  }
}

customElements.define('about-header', AboutHeader);
