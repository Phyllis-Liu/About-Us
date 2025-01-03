import { LitElement, html, css } from 'lit';
import './components/header-nav.js';
import './components/about-header.js';
import './components/about-ma.js';
import './components/banner-section.js';
import './components/management-words.js';
import './components/history-section.js';
import './components/core-value-section.js';
import './components/footer-section.js';

class CompanyPage extends LitElement {
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
      font-family: Arial, sans-serif;
    }
  `;

  handleTabChange(e) {
    this.activeTab = e.detail.tab;
  }

  render() {
    return html`
      <header-nav></header-nav>
      
      <about-header 
        .activeTab="${this.activeTab}"
        @tab-change="${this.handleTabChange}"
      ></about-header>

      <about-ma></about-ma>
      
      <banner-section></banner-section>
      
      <management-words></management-words>
      
      <history-section></history-section>
      
      <core-value-section></core-value-section>

      <footer-section></footer-section>
    `;
  }
}

customElements.define('company-page', CompanyPage);
