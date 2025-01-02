import { LitElement, html, css } from 'lit';

class AboutMa extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 60px 20px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      align-items: start;
    }

    .company-photo {
      width: 100%;
      aspect-ratio: 16/9;
      background: #f5f5f5;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #666;
      font-size: 24px;
    }

    .content {
      text-align: left;
    }

    .paragraph {
      margin-bottom: 24px;
      line-height: 1.6;
      color: #333;
    }

    .why-us {
      margin-top: 40px;
    }

    .why-us h2 {
      font-size: 24px;
      margin-bottom: 20px;
      color: #333;
    }

    .benefits-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .benefit-item {
      margin-bottom: 16px;
      line-height: 1.5;
    }

    .benefit-item strong {
      color: #333;
      margin-right: 8px;
    }
  `;

  render() {
    return html`
      <div class="container">
        <div class="photo-section">
          <div class="company-photo">Company photo</div>
          <div class="why-us">
            <h2>Why Choose Us?</h2>
            <ul class="benefits-list">
              <li class="benefit-item">
                <strong>1. Experienced & Trusted:</strong> With 20 years in the industry, we will be your reliable partner.
              </li>
              <li class="benefit-item">
                <strong>2. Custom Solutions:</strong> We tailor our services to meet your unique needs.
              </li>
              <li class="benefit-item">
                <strong>3. Your Success Matters:</strong> We are committed to your success and provide ongoing support.
              </li>
            </ul>
          </div>
        </div>

        <div class="content">
          <p class="paragraph">
            Established in 2004, Masterwork Automodules has been transforming cash handling practices for businesses across various industries including retail, banking, restaurants, casinos, cannabis, and more. Our innovative solutions are renowned for their outstanding performance, unwavering reliability, energy efficiency, and great user experience, setting new standards in the industry and ensuring seamless and efficient cash management processes for our valued clients.
          </p>

          <p class="paragraph">
            Our presence spans across Austria, Hong Kong, India, Japan, Spain, the USA, and our R&D headquarters are strategically located in Taiwan and Serbia. From the dynamic landscapes of Taiwan to the cultural richness of Spain, our diverse locations reflect our commitment to delivering cutting-edge solutions worldwide. With a team that spans continents, we thrive on unity, diversity, and collaborative excellence.
          </p>

          <p class="paragraph">
            Our global presence positions us strategically to intimately comprehend the unique challenges and aspirations of each client. This understanding drives our dedication to crafting personalized solutions that streamline operations, reduce costs, and enhance the overall customer journey. Through the combination of advanced technology and a collaborative approach, we are steadfast in our mission to assist businesses in unlocking their full potential and achieving unprecedented levels of success.
          </p>
        </div>
      </div>
    `;
  }
}

customElements.define('about-ma', AboutMa);
