import { LitElement, html, css } from 'lit';

class FooterSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: #000;
      padding: 60px 20px;
      color: white;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 40px;
      margin-bottom: 40px;
    }

    .footer-section h3 {
      font-size: 1.2rem;
      margin-bottom: 1.5rem;
      font-weight: normal;
    }

    .nav-menu {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .nav-menu li {
      margin-bottom: 1rem;
    }

    .nav-menu a {
      color: #808080;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .nav-menu a:hover {
      color: white;
    }

    .contact-info {
      color: #808080;
      line-height: 1.6;
    }

    .contact-info p {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      margin-bottom: 1rem;
    }

    .contact-icon {
      width: 24px;
      height: 24px;
      flex-shrink: 0;
      fill: white;
    }

    .social-links {
      display: flex;
      gap: 15px;
    }

    .social-icon {
      width: 24px;
      height: 24px;
      fill: white;
      transition: fill 0.3s ease;
    }

    .social-icon:hover {
      fill: #B32F23;
    }

    .subscribe-btn {
      display: inline-block;
      padding: 10px 20px;
      border: 1px solid white;
      border-radius: 4px;
      color: white;
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .subscribe-btn:hover {
      background: white;
      color: black;
    }

    .copyright {
      text-align: center;
      color: #808080;
      padding-top: 20px;
      border-top: 1px solid #333;
      font-size: 0.9rem;
    }

    @media (max-width: 1024px) {
      .footer-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 640px) {
      .footer-grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  render() {
    return html`
      <div class="container">
        <div class="footer-grid">
          <div class="footer-section">
            <h3>NAVIGATION MENU</h3>
            <ul class="nav-menu">
              <li><a href="/news">NEWS</a></li>
              <li><a href="/product">PRODUCT</a></li>
              <li><a href="/solution">SOLUTION</a></li>
              <li><a href="/tech-support">TECH SUPPORT</a></li>
              <li><a href="/contact">CONTACT US</a></li>
              <li><a href="/privacy">PRIVACY POLICY</a></li>
              <li><a href="/cookie">COOKIE POLICY</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3>INTERESTED IN OUR PRODUCTS AND SERVICES?</h3>
            <div class="contact-info">
              <p>
                <svg class="contact-icon" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                11F, 114, SEC.1, XINTAI 5TH RD, XIZHI, 22102 NEW TAIPEI, TAIWAN
              </p>
              <p>
                <svg class="contact-icon" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                TEL: +886 2 2655 7997
              </p>
            </div>
          </div>

          <div class="footer-section">
            <h3>CONTACT US</h3>
            <div class="social-links">
              <a href="/linkedin">
                <svg class="social-icon" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a href="/facebook">
                <svg class="social-icon" viewBox="0 0 24 24">
                  <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
                </svg>
              </a>
              <a href="/instagram">
                <svg class="social-icon" viewBox="0 0 24 24">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"/>
                </svg>
              </a>
              <a href="/twitter">
                <svg class="social-icon" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"/>
                </svg>
              </a>
              <a href="/youtube">
                <svg class="social-icon" viewBox="0 0 24 24">
                  <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73Z"/>
                </svg>
              </a>
            </div>
          </div>

          <div class="footer-section">
            <h3>LINKEDIN E-NEWS</h3>
            <a href="/subscribe" class="subscribe-btn">SUBSCRIBE</a>
          </div>
        </div>

        <div class="copyright">
          © 2025 Masterwork Automodules. All rights reserved.
        </div>
      </div>
    `;
  }
}

customElements.define('footer-section', FooterSection);
