import { LitElement, html, css } from 'lit';

class HeaderNav extends LitElement {
  static properties = {
    isDropdownOpen: { type: Boolean },
    selectedLanguage: { type: String },
    isScrolled: { type: Boolean }
  };

  constructor() {
    super();
    this.isDropdownOpen = false;
    this.selectedLanguage = 'EN';
    this.languages = ['EN', 'TW', 'JP', 'ES', 'DE', 'FR'];
    this.isScrolled = false;
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('scroll', () => {
      this.isScrolled = window.scrollY > 50;
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('scroll', () => {
      this.isScrolled = window.scrollY > 50;
    });
  }

  static styles = css`
    :host {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      transition: background-color 0.3s ease;
    }

    :host([scrolled]) {
      background-color: rgba(0, 0, 0, 0.9);
    }

    .header-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem 2rem;
    }

    .logo {
      color: #fff;
      display: flex;
      align-items: center;
      text-decoration: none;
    }

    .logo-svg {
      height: 40px;
      width: 120px;
    }

    .nav-container {
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    .nav-item {
      color: #fff;
      text-decoration: none;
      font-size: 14px;
      transition: color 0.3s;
      white-space: nowrap;
    }

    .nav-item:hover {
      color: #ff0000;
    }

    .web360-btn {
      background-color: #fff;
      color: #000;
      padding: 8px 16px;
      border-radius: 4px;
      text-decoration: none;
      font-weight: bold;
      transition: all 0.3s ease;
      border: 1px solid transparent;
    }

    .web360-btn:hover {
      background-color: #000;
      color: #fff;
      border: 1px solid #fff;
    }

    .language-select {
      position: relative;
      color: #fff;
      cursor: pointer;
    }

    .language-button {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 4px 8px;
      border: none;
      background: none;
      color: #fff;
      cursor: pointer;
    }

    .dropdown-content {
      position: absolute;
      top: 100%;
      right: 0;
      background-color: rgba(0, 0, 0, 0.9);
      min-width: 100px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
      border-radius: 4px;
      display: none;
      z-index: 1000;
    }

    .dropdown-content.show {
      display: block;
    }

    .dropdown-item {
      color: #fff;
      padding: 8px 12px;
      text-decoration: none;
      display: block;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .dropdown-item:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  `;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectLanguage(lang) {
    this.selectedLanguage = lang;
    this.isDropdownOpen = false;
  }

  render() {
    return html`
      <div class="header-container">
        <a href="/" class="logo">
          <svg class="logo-svg" viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" x="0" y="0" fill="#ff0000"/>
            <rect width="70" height="12" x="45" y="5" fill="#ffffff"/>
            <rect width="50" height="12" x="45" y="23" fill="#ffffff"/>
          </svg>
        </a>
        
        <div class="nav-container">
          <a href="/about" class="nav-item">ABOUT US</a>
          <a href="/news" class="nav-item">NEWS</a>
          <a href="/product" class="nav-item">PRODUCT</a>
          <a href="/solution" class="nav-item">SOLUTION</a>
          <a href="/support" class="nav-item">TECH SUPPORT</a>
          <a href="/contact" class="nav-item">CONTACT US</a>
          <a href="/web360" class="web360-btn">WEB360</a>
          
          <div class="language-select">
            <button class="language-button" @click="${this.toggleDropdown}">
              <span>🌐</span>
              <span>${this.selectedLanguage}</span>
            </button>
            <div class="dropdown-content ${this.isDropdownOpen ? 'show' : ''}">
              ${this.languages.map(lang => html`
                <div class="dropdown-item" @click="${() => this.selectLanguage(lang)}">
                  ${lang}
                </div>
              `)}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  updated(changedProperties) {
    if (changedProperties.has('isScrolled')) {
      if (this.isScrolled) {
        this.setAttribute('scrolled', '');
      } else {
        this.removeAttribute('scrolled');
      }
    }
  }
}

customElements.define('header-nav', HeaderNav);
