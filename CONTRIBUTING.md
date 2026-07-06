# Contributing to openDesk Edu Landscape

Thanks for your interest in improving the landscape! This is a community-driven project and we welcome contributions of all kinds.

## Quick Start

The landscape is a **static site** with a **YAML data source**. The workflow is:

1. Edit `data/services.yaml` (the single source of truth)
2. Run `npm run build` to regenerate `data/services.js`
3. Open `index.html` in a browser to preview
4. Commit both files and open a PR

## Adding a New Service

Edit `data/services.yaml` and add your service under the appropriate category and subcategory.

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
  logo: "your-service.svg"    # optional
  tags: ["tag1", "tag2"]
```

### Tier Guidelines

- **critical**: Service failure breaks other services (auth, storage, email)
- **high**: Important but alternatives exist (LMS, video conferencing)
- **standard**: Enhances productivity, can be deferred (kanban, surveys)
- **low**: Nice-to-have or easily replaceable (diagram editors)

### Logo

If you'd like to add a logo, place the SVG in `hosted_logos/` and reference it with `logo: "filename.svg"` in the YAML entry. There's a helper script:

```bash
bash scripts/fetch-logos.sh
```

## Updating an Existing Service

Edit the relevant fields in `data/services.yaml` and rebuild.

## Project Structure

```
├── data/
│   ├── services.yaml       # YAML data (source of truth)
│   └── services.js         # Auto-generated JS (do not edit directly)
├── scripts/
│   ├── generate-data.js    # YAML → JS generator
│   └── fetch-logos.sh      # Logo downloader
├── hosted_logos/           # Service logo SVGs
├── index.html              # Main page
├── styles.css              # Stylesheet
└── script.js               # Interactive JS
```

## Before Submitting

1. Run `npm run build` and verify it completes
2. Open `index.html` in a browser and check your changes render correctly
3. Ensure `data/services.js` is committed

## PR Template

Please use the pull request template — it includes a checklist that helps reviewers.

## Code of Conduct

Be respectful, constructive, and inclusive. This is a community project — we're all here to build something useful for educational institutions.
