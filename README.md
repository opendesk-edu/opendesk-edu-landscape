<!--
SPDX-FileCopyrightText: 2026 openDesk Edu Contributors
SPDX-License-Identifier: Apache-2.0
-->

# 🌄 openDesk Edu Landscape

An interactive, visual map of the openDesk Edu open-source ecosystem — integrated services for educational institutions. Inspired by the [CNCF Landscape](https://landscape.cncf.io).

**Live Site**: https://landscape.opendesk-edu.org

## What is This?

The openDesk Edu Landscape is an interactive visualization of the complete ecosystem of open-source services that make up the openDesk Edu platform. It helps:

- 🎓 **Educational institutions** understand the complete technology stack
- 🔧 **IT administrators** evaluate and plan deployments
- 👨‍💻 **Developers** discover services and integration points
- 📊 **Decision-makers** see the scope and maturity of the ecosystem

## Features

✅ **Interactive Visualization** - Browse services across 5 categories
🔍 **Powerful Search** - Find services by name, description, or tags
🎯 **Tier Filtering** - Filter by service tier (Critical, High, Standard, Low)
📈 **Statistics** - View license distribution, tier breakdown, and ecosystem metrics
🔗 **Direct Links** - Click any service to visit its website or repository
📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
🌍 **Open Source** - Apache-2.0 licensed, community-driven

## Categories

The services are organized into 9 main categories:

1. **Operations & Infrastructure** (8 services) - Prometheus, Grafana, Loki, Harbor, Traefik, Docker, Restic, Alertmanager
2. **Security** (1 service) - Vaultwarden
3. **Analytics & Search** (2 services) - Matomo, Meilisearch
4. **Media** (1 service) - Jellyfin
5. **Identity & Access** (3 services) - Keycloak, Nubus, Self-Service Password
6. **Learning Management** (5 services) - ILIAS, Moodle, BigBlueButton, Jitsi, XWiki
7. **Content & Collaboration** (10 services) - Nextcloud, OpenCloud, Collabora, Etherpad, CryptPad, Notes, Draw.io, Excalidraw, BookStack, TYPO3
8. **Project Management** (2 services) - OpenProject, Planka
9. **Communication** (7 services) - OX App Suite, SOGo, Dovecot, Postfix, Element, Zammad, LimeSurvey

## Service Tiers

Services are classified by criticality:

- **Critical Tier** (14 services) - Foundation services with 99.9% availability
- **High Tier** (12 services) - Important services with 99.5% availability
- **Standard Tier** (11 services) - Collaboration tools with 99.0% availability
- **Low Tier** (2 services) - Supporting tools

## How to Use

### Online

Visit **https://landscape.opendesk-edu.org** to use the interactive landscape.

### Local Development

```bash
# Clone the repository
git clone https://github.com/opendesk-edu/landscape.opendesk-edu.org.git
cd landscape.opendesk-edu.org

# Serve locally
python3 -m http.server 8000

# Open http://localhost:8000 in your browser
```

Or use any static file server:

```bash
# Node.js http-server
npx http-server -p 8000

# PHP
php -S localhost:8000
```

## Project Structure

```
landscape.opendesk-edu.org/
├── index.html              # Main HTML page
├── styles.css              # Stylesheet
├── script.js               # Interactive JavaScript
├── data/
│   ├── services.yaml       # Landscape data (YAML — source of truth)
│   └── services.js         # Auto-generated from YAML (via npm run build)
├── scripts/
│   └── generate-data.js    # YAML → JS generator
├── package.json            # Project metadata
├── CNAME                   # Custom domain configuration
└── README.md               # This file
```

## Contributing

We welcome contributions! The landscape is community-driven and designed to be easy to update.

### Adding or Updating a Service

1. **Edit the data file** (`data/services.yaml` — the single source of truth):
    ```yaml
    - name: "Your Service"
      description: "Brief description"
      url: "https://example.com"
      repository: "https://github.com/org/repo"
      license: "Apache-2.0"
      category: "lms"
      subcategory: "LMS Platforms"
      tier: "high"
      maturity: "production"
      tags: ["tag1", "tag2"]
    ```

2. **Run the generator** to update the JavaScript:
    ```bash
    npm run build
    ```

3. **Add a logo** (optional but recommended):
    - Place logo SVG in `hosted_logos/` directory
    - Reference it in the entry: `logo: "your-service.svg"`

4. **Open a Pull Request** with:
    - Clear description of the service
    - Justification for the category and tier
    - Confirmation that the license is compatible (open source)

### Tier Classification Guidelines

When adding a service, use these guidelines for tier classification:

- **Critical**: Service is foundational and its failure breaks multiple other services (e.g., authentication, primary storage)
- **High**: Service is important for core workflows but alternatives exist (e.g., LMS, email)
- **Standard**: Service enhances productivity but can be deferred (e.g., Kanban, surveys)
- **Low**: Service is nice-to-have or easily replaceable (e.g., simple diagram editors)

### Updating Existing Services

To update information for an existing service:

1. Edit the relevant field in the data file
2. Open a PR with a clear description of the change
3. Reference any relevant issues or discussions

## Inspiration

This project is inspired by the [CNCF Landscape](https://landscape.cncf.io), which provides an excellent interactive visualization of the cloud native ecosystem. We've adapted the concept for the openDesk Edu educational technology ecosystem.

**Key differences from CNCF Landscape:**
- Focused on educational technology use cases
- Simpler structure (integrated services vs. 1000+)
- Self-contained static site (no build process)
- Easier to contribute (YAML data file)
- Apache-2.0 licensed (CNCF is also Apache-2.0)

## Technical Details

- **No build process** - Pure HTML, CSS, and JavaScript
- **No dependencies** - Works without npm install or any package manager
- **Responsive design** - Mobile-first approach with CSS Grid and Flexbox
- **Accessible** - Semantic HTML, ARIA labels, keyboard navigation
- **Fast** - No external dependencies, loads in <1 second
- **SEO-friendly** - Proper meta tags, semantic markup

## License

Apache-2.0

Copyright 2026 openDesk Edu Contributors

## Related Projects

- **[opendesk-edu.org](https://opendesk-edu.org)** - Main project website
- **[OpenSpec Documentation](https://github.com/opendesk-edu/opendesk-edu-spec)** - Complete specifications
- **[opendesk-edu GitHub](https://github.com/opendesk-edu/opendesk-edu)** - Source code and issues
- **[CNCF Landscape](https://landscape.cncf.io)** - Inspiration for this project

## Contact

- **GitHub Issues**: https://github.com/opendesk-edu/landscape.opendesk-edu.org/issues
- **Email**: tobias.weiss@uni-marburg.de
- **Website**: https://opendesk-edu.org

---

**Made with ❤️ by the openDesk Edu Community**
