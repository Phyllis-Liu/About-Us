import { LitElement, html, css } from 'lit';

class HistorySection extends LitElement {
  static properties = {
    currentIndex: { type: Number },
    timelineData: { type: Array }
  };

  constructor() {
    super();
    this.currentIndex = 0;
    this.timelineData = [
      {
        year: 2006,
        category: 'COMPACT & PORTABLE',
        products: [
          { name: 'NC1100', image: 'nc1100' },
          { name: 'NC1300', image: 'nc1300' },
          { name: 'NC1200', image: 'nc1200' },
          { name: 'PD100', image: 'pd100' }
        ],
        description: 'Our journey began, evolving from modest beginnings to a diverse array of solutions. In 2006, we introduced a compact and portable banknote validator, marking our entry into the industry.'
      },
      {
        year: 2010,
        category: 'CASH RECYCLING',
        products: [
          { name: 'CR100', image: 'cr100' },
          { name: 'CR200', image: 'cr200' },
          { name: 'CR300', image: 'cr300' }
        ],
        description: 'In 2010, we expanded our portfolio with cash recycling solutions, revolutionizing how businesses handle cash transactions.'
      },
      {
        year: 2015,
        category: 'SMART SOLUTIONS',
        products: [
          { name: 'SM100', image: 'sm100' },
          { name: 'SM200', image: 'sm200' },
          { name: 'SM300', image: 'sm300' }
        ],
        description: 'By 2015, we introduced smart solutions that integrated advanced technology with our cash handling expertise.'
      }
    ];
  }

  static styles = css`
    :host {
      display: block;
      padding: 80px 20px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 40px;
    }

    .title {
      font-size: 32px;
      font-weight: bold;
      margin: 0;
    }

    .controls {
      display: flex;
      gap: 20px;
      align-items: center;
    }

    .control-btn {
      cursor: pointer;
      padding: 8px;
      background: none;
      border: none;
      font-size: 24px;
      transition: opacity 0.3s;
    }

    .control-btn:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }

    .pause-btn {
      font-size: 20px;
    }

    .divider {
      width: 100%;
      height: 1px;
      background-color: #ddd;
      margin: 40px 0;
    }

    .category {
      font-size: 24px;
      color: #666;
      margin: 0 0 30px 0;
      transition: opacity 0.3s;
    }

    .products {
      display: flex;
      justify-content: flex-end;
      gap: 40px;
      margin-bottom: 60px;
      transition: opacity 0.3s;
    }

    .product {
      text-align: center;
    }

    .product-image {
      width: 150px;
      height: 100px;
      margin-bottom: 10px;
    }

    .product-name {
      color: #666;
      font-size: 14px;
    }

    .timeline {
      display: flex;
      align-items: center;
      gap: 40px;
    }

    .year {
      font-size: 64px;
      color: #333;
      opacity: 0.8;
      transition: all 0.3s;
    }

    .description {
      font-size: 18px;
      line-height: 1.6;
      color: #666;
      max-width: 600px;
      transition: opacity 0.3s;
    }

    .timeline-line {
      width: 100%;
      height: 1px;
      background-color: #ddd;
      position: relative;
      margin-top: 40px;
    }

    .timeline-dot {
      width: 12px;
      height: 12px;
      background-color: #333;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      transition: left 0.3s ease;
    }

    .content-section {
      opacity: 1;
      transition: opacity 0.3s;
    }

    .content-section.transitioning {
      opacity: 0;
    }
  `;

  nextTimeline() {
    if (this.currentIndex < this.timelineData.length - 1) {
      this.startTransition(() => {
        this.currentIndex++;
      });
    }
  }

  previousTimeline() {
    if (this.currentIndex > 0) {
      this.startTransition(() => {
        this.currentIndex--;
      });
    }
  }

  startTransition(callback) {
    const content = this.shadowRoot.querySelector('.content-section');
    content.classList.add('transitioning');
    
    setTimeout(() => {
      callback();
      requestAnimationFrame(() => {
        content.classList.remove('transitioning');
      });
    }, 300);
  }

  getDotPosition() {
    const totalPositions = this.timelineData.length - 1;
    const position = (this.currentIndex / totalPositions) * 80 + 10; // 10% to 90%
    return `${position}%`;
  }

  render() {
    const currentData = this.timelineData[this.currentIndex];

    return html`
      <div class="header">
        <h2 class="title">HISTORY</h2>
        <div class="controls">
          <button 
            class="control-btn" 
            @click="${this.previousTimeline}"
            ?disabled="${this.currentIndex === 0}"
          >←</button>
          <button 
            class="control-btn" 
            @click="${this.nextTimeline}"
            ?disabled="${this.currentIndex === this.timelineData.length - 1}"
          >→</button>
          <button class="control-btn pause-btn">||</button>
        </div>
      </div>

      <div class="divider"></div>

      <div class="content-section">
        <h3 class="category">${currentData.category}</h3>

        <div class="products">
          ${currentData.products.map(product => html`
            <div class="product">
              <svg class="product-image" viewBox="0 0 150 100">
                <rect width="100%" height="100%" fill="#f5f5f5"/>
              </svg>
              <div class="product-name">${product.name}</div>
            </div>
          `)}
        </div>

        <div class="timeline">
          <div class="year">${currentData.year}</div>
          <div class="description">${currentData.description}</div>
        </div>
      </div>

      <div class="timeline-line">
        <div class="timeline-dot" style="left: ${this.getDotPosition()}"></div>
      </div>
    `;
  }
}

customElements.define('history-section', HistorySection);
