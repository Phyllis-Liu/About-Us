import { LitElement, html, css } from 'lit';

class ManagementWords extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 80px 20px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .header {
      margin-bottom: 60px;
    }

    .section-title {
      font-size: 16px;
      color: #666;
      margin: 0;
      font-weight: normal;
    }

    .management-title {
      font-size: 32px;
      margin: 10px 0 0 0;
      font-weight: bold;
    }

    .management-cards {
      display: flex;
      flex-direction: column;
      gap: 40px;
    }

    .management-card {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      align-items: center;
      background: #fff;
      padding: 20px;
    }

    .photo-container {
      width: 100%;
      height: 300px;
      background: #f5f5f5;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .photo-svg {
      width: 100%;
      height: 100%;
    }

    .content {
      padding: 20px;
    }

    .name {
      font-size: 28px;
      font-weight: bold;
      margin: 0 0 10px 0;
    }

    .position {
      font-size: 16px;
      color: #666;
      margin: 0 0 20px 0;
    }

    .quote {
      font-size: 18px;
      line-height: 1.6;
      color: #333;
      margin: 0;
    }
  `;

  render() {
    return html`
      <div class="header">
        <h3 class="section-title">WORDS FROM THE</h3>
        <h2 class="management-title">MANAGEMENT</h2>
      </div>

      <div class="management-cards">
        <div class="management-card">
          <div class="photo-container">
            <svg class="photo-svg" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" fill="#f5f5f5"/>
              <rect x="150" y="80" width="100" height="100" fill="#ddd" rx="50"/>
              <rect x="130" y="200" width="140" height="20" fill="#ddd" rx="10"/>
              <rect x="160" y="240" width="80" height="20" fill="#ddd" rx="10"/>
            </svg>
          </div>
          <div class="content">
            <h3 class="name">JASON LIU</h3>
            <p class="position">-PRESIDENT</p>
            <p class="quote">The best part of running Masterwork is having partners as friends for decades</p>
          </div>
        </div>

        <div class="management-card">
          <div class="photo-container">
            <svg class="photo-svg" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" fill="#f5f5f5"/>
              <rect x="150" y="80" width="100" height="100" fill="#ddd" rx="50"/>
              <rect x="130" y="200" width="140" height="20" fill="#ddd" rx="10"/>
              <rect x="160" y="240" width="80" height="20" fill="#ddd" rx="10"/>
            </svg>
          </div>
          <div class="content">
            <h3 class="name">JULIJE</h3>
            <p class="position">-CEO</p>
            <p class="quote">The best part of running Masterwork is having partners as friends for decades</p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('management-words', ManagementWords);
