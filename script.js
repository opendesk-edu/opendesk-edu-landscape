// openDesk Edu Landscape - Interactive JavaScript

class LandscapeApp {
  constructor() {
    this.data = null;
    this.currentFilter = 'all';
    this.searchQuery = '';
    this.init();
  }

  async init() {
    await this.loadData();
    this.renderLandscape();
    this.renderStats();
    this.renderMetadata();
    this.setupEventListeners();
    this.updateLastUpdated();
  }

  async loadData() {
    try {
      if (window.__LANDSCAPE_DATA) {
        this.data = window.__LANDSCAPE_DATA;
      } else {
        this.data = this.getEmbeddedData();
      }
    } catch (error) {
      console.error('Failed to load landscape data:', error);
    }
  }

  getEmbeddedData() {
    return window.__LANDSCAPE_DATA || { categories: [], metadata: {} };
  }

  renderLandscape() {
    const container = document.getElementById('landscape');
    container.innerHTML = '';

    this.data.categories.forEach(category => {
      const visibleSubcategories = category.subcategories
        .map(sub => ({
          ...sub,
          items: sub.items.filter(item => this.matchesFilter(item))
        }))
        .filter(sub => sub.items.length > 0);

      if (visibleSubcategories.length === 0) return;

      const categoryEl = document.createElement('div');
      categoryEl.className = 'category';
      categoryEl.innerHTML = `
        <div class="category-header" style="border-left: 4px solid ${category.color}">
          <h2>${category.icon} ${category.name}</h2>
          <p>${category.description}</p>
        </div>
      `;

      visibleSubcategories.forEach(sub => {
        const subEl = document.createElement('div');
        subEl.className = 'subcategory';
        subEl.innerHTML = `
          <h3 class="subcategory-title">${sub.name}</h3>
          <div class="items-grid">
            ${sub.items.map(item => this.renderItem(item)).join('')}
          </div>
        `;
        categoryEl.appendChild(subEl);
      });

      container.appendChild(categoryEl);
    });
  }

  renderItem(item) {
    const tagsHtml = item.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    const logoHtml = item.logo
      ? `<img class="item-logo" src="hosted_logos/${item.logo}" alt="${item.name} logo" loading="lazy">`
      : `<div class="item-logo item-logo-fallback" style="background:hsl(${this.hashCode(item.name) % 360}, 60%, 40%)">${item.name.charAt(0)}</div>`;
    return `
      <a href="${item.url}" target="_blank" rel="noopener" class="item-card">
        <div class="item-header">
          <div class="item-name-row">
            ${logoHtml}
            <div class="item-name">${item.name}</div>
          </div>
          <span class="tier-badge tier-${item.tier}">${item.tier}</span>
        </div>
        <div class="item-description">${item.description}</div>
        <div class="item-tags">${tagsHtml}</div>
        <div class="item-meta">
          <span class="item-license">${item.license}</span>
          <span>${item.maturity}</span>
        </div>
        ${item.repository ? `<div class="item-repo" title="${item.repository}">${item.repository.replace('https://github.com/', '')}</div>` : ''}
      </a>
    `;
  }

  hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash);
  }

  renderStats() {
    const m = this.data.metadata;
    document.getElementById('stat-services').textContent = m.total_services;
    document.getElementById('stat-categories').textContent = m.total_categories;
    document.getElementById('stat-count-services').textContent = m.total_services;
    document.getElementById('stat-count-categories').textContent = m.total_categories;
    document.getElementById('stat-count-licenses').textContent = m.license_breakdown.length;
  }

  renderMetadata() {
    this.renderLicenseStats();
    this.renderMaturityStats();
    this.renderTierStats();
  }

  renderLicenseStats() {
    const container = document.getElementById('license-stats');
    container.innerHTML = this.data.metadata.license_breakdown
      .sort((a, b) => b.count - a.count)
      .map(item => `
        <div class="stat-bar">
          <span class="stat-label-sm">${item.license}</span>
          <span class="stat-value">${item.count} services</span>
        </div>
      `).join('');
  }

  renderMaturityStats() {
    const container = document.getElementById('maturity-stats');
    if (!container || !this.data.metadata.maturity_levels) return;
    container.innerHTML = this.data.metadata.maturity_levels
      .sort((a, b) => b.count - a.count)
      .map(item => `
        <div class="stat-bar">
          <span class="stat-label-sm">${item.level.charAt(0).toUpperCase() + item.level.slice(1)}</span>
          <span class="stat-value">${item.count} services</span>
        </div>
      `).join('');
  }

  renderTierStats() {
    const container = document.getElementById('tier-stats');
    container.innerHTML = this.data.metadata.service_tiers
      .map(item => `
        <div class="stat-bar">
          <span class="stat-label-sm">${item.tier.charAt(0).toUpperCase() + item.tier.slice(1)} Tier</span>
          <span class="stat-value">${item.count} services</span>
        </div>
      `).join('');
  }

  matchesFilter(item) {
    const tierMatch = this.currentFilter === 'all' || item.tier === this.currentFilter;
    if (!tierMatch) return false;

    if (!this.searchQuery) return true;

    const query = this.searchQuery.toLowerCase();
    return item.name.toLowerCase().includes(query) ||
           item.description.toLowerCase().includes(query) ||
           item.tags.some(tag => tag.toLowerCase().includes(query)) ||
           item.license.toLowerCase().includes(query) ||
           item.subcategory.toLowerCase().includes(query);
  }

  setupEventListeners() {
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', (e) => {
      this.searchQuery = e.target.value;
      this.renderLandscape();
    });

    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        this.currentFilter = e.target.dataset.filter;
        this.renderLandscape();
      });
    });
  }

  updateLastUpdated() {
    const el = document.getElementById('last-updated');
    if (el) {
      el.textContent = new Date().toISOString().split('T')[0];
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new LandscapeApp();
});
