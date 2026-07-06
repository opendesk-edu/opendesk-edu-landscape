#!/usr/bin/env node
// SPDX-FileCopyrightText: 2026 openDesk Edu Contributors
// SPDX-License-Identifier: Apache-2.0
//
// Generates data/services.js from data/services.yaml
// Usage: node scripts/generate-data.js

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const yamlPath = path.join(__dirname, '..', 'data', 'services.yaml');
const outputPath = path.join(__dirname, '..', 'data', 'services.js');

let data;
try {
  data = yaml.load(fs.readFileSync(yamlPath, 'utf8'));
} catch (e) {
  console.error('Failed to parse YAML:', e.message);
  process.exit(1);
}

// Validate structure
const validTiers = ['critical', 'high', 'standard', 'low'];
const validCategories = new Set(data.categories.map(c => c.id));
let errors = [];

data.categories.forEach(cat => {
  if (!cat.id || !cat.name) errors.push(`Category missing id or name: ${JSON.stringify(cat)}`);
  if (!cat.subcategories || !Array.isArray(cat.subcategories)) errors.push(`Category "${cat.id}" has no subcategories`);
  cat.subcategories.forEach((sub, si) => {
    if (!sub.name) errors.push(`Category "${cat.id}" subcategory #${si} missing name`);
    (sub.items || []).forEach((item, ii) => {
      if (!item.name) errors.push(`Category "${cat.id}" > "${sub.name}" item #${ii} missing name`);
      if (!item.description) errors.push(`"${item.name}" missing description`);
      if (!item.url) errors.push(`"${item.name}" missing url`);
      if (!item.license) errors.push(`"${item.name}" missing license`);
      if (!item.tier || !validTiers.includes(item.tier)) errors.push(`"${item.name}" invalid/missing tier (must be one of: ${validTiers.join(', ')})`);
      if (!item.category) errors.push(`"${item.name}" missing category`);
      if (item.category && !validCategories.has(item.category)) errors.push(`"${item.name}" references unknown category "${item.category}"`);
      if (item.subcategory && item.subcategory !== sub.name) errors.push(`"${item.name}" subcategory "${item.subcategory}" doesn't match parent "${sub.name}"`);
      if (!item.maturity) errors.push(`"${item.name}" missing maturity`);
    });
  });
});

if (errors.length > 0) {
  console.error(`Found ${errors.length} validation error(s):`);
  errors.forEach(e => console.error(`  ✗ ${e}`));
  process.exit(1);
}

// Derive metadata from actual data
const items = data.categories.flatMap(c =>
  c.subcategories.flatMap(s => s.items)
);
const licenseCounts = {};
const tierCounts = {};
const maturityCounts = {};
items.forEach(item => {
  licenseCounts[item.license] = (licenseCounts[item.license] || 0) + 1;
  tierCounts[item.tier] = (tierCounts[item.tier] || 0) + 1;
  maturityCounts[item.maturity] = (maturityCounts[item.maturity] || 0) + 1;
});
data.metadata = {
  total_services: items.length,
  total_categories: data.categories.length,
  license_breakdown: Object.entries(licenseCounts).map(([license, count]) => ({ license, count })),
  service_tiers: Object.entries(tierCounts).map(([tier, count]) => ({ tier, count })),
  maturity_levels: Object.entries(maturityCounts).map(([level, count]) => ({ level, count }))
};

const jsContent = `// Auto-generated from data/services.yaml — DO NOT EDIT DIRECTLY
// Run: node scripts/generate-data.js

window.__LANDSCAPE_DATA = ${JSON.stringify(data, null, 2)};
`;

fs.writeFileSync(outputPath, jsContent, 'utf8');
console.log(`Generated ${outputPath} (${data.categories.length} categories, ${data.metadata.total_services} services)`);
