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
      border: none;
      background: none;
      font-size: 16px;
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

    /* ABOUT 按鈕的基本樣式 */
    .nav-item[data-tab="about"] {
      color: #666;
    }

    .nav-item[data-tab="about"]::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: transparent;
      transition: all 0.3s ease;
    }

    /* ABOUT 按鈕的懸停效果 */
    .nav-item[data-tab="about"]:hover {
      color: #B32F23;
    }

    .nav-item[data-tab="about"]:hover::after {
      background-color: #B32F23;
    }

    /* HISTORY 和 CORE VALUE 按鈕的樣式 */
    .nav-item[data-tab="history"],
    .nav-item[data-tab="core-value"] {
      color: #666;
    }

    .nav-item[data-tab="history"]::after,
    .nav-item[data-tab="core-value"]::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: transparent;
      transition: all 0.3s ease;
    }

    .nav-item[data-tab="history"]:hover,
    .nav-item[data-tab="core-value"]:hover {
      color: #B32F23;
    }

    .nav-item[data-tab="history"]:hover::after,
    .nav-item[data-tab="core-value"]:hover::after {
      background-color: #B32F23;
    }

    .nav-item[data-tab="history"].active,
    .nav-item[data-tab="core-value"].active {
      color: #000;
    }

    .nav-item[data-tab="history"].active::after,
    .nav-item[data-tab="core-value"].active::after {
      background-color: #000;
    }

    @keyframes heartBeat {
      0% {
        transform: scale(1);
      }
      14% {
        transform: scale(1.1);
      }
      28% {
        transform: scale(1);
      }
      42% {
        transform: scale(1.1);
      }
      70% {
        transform: scale(1);
      }
    }

    .heartbeat {
      animation: heartBeat 1s ease-in-out;
    }
  `;

  setActiveTab(tab) {
    const buttons = this.shadowRoot.querySelectorAll('.nav-item');
    buttons.forEach(button => button.classList.remove('heartbeat'));

    const clickedButton = this.shadowRoot.querySelector(`.nav-item[data-tab="${tab}"]`);
    if (clickedButton) {
      clickedButton.classList.add('heartbeat');
      setTimeout(() => {
        clickedButton.classList.remove('heartbeat');
      }, 1000);
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
            class="nav-item ${this.activeTab === 'about' ? 'active' : ''}"
            @click="${() => this.setActiveTab('about')}"
            data-tab="about"
          >ABOUT</button>
          <button 
            class="nav-item ${this.activeTab === 'history' ? 'active' : ''}"
            @click="${() => this.setActiveTab('history')}"
            data-tab="history"
          >HISTORY</button>
          <button 
            class="nav-item ${this.activeTab === 'core-value' ? 'active' : ''}"
            @click="${() => this.setActiveTab('core-value')}"
            data-tab="core-value"
          >CORE VALUE</button>
        </div>
      </div>
    `;
  }
}

customElements.define('about-header', AboutHeader);
