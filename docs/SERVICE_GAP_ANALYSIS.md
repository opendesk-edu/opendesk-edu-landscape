# Service Gap Analysis: openDesk Edu Landscape

**Date**: 2026-06-27
**Current Services**: Integrated
**Status**: Comprehensive but gaps identified

## Executive Summary

The current integrated-service ecosystem covers core educational technology needs well. However, analysis reveals several categories where additional services would significantly enhance the platform's value proposition, especially for German/European educational institutions focused on digital sovereignty.

## Gap Analysis by Category

### 🚨 **Critical Gaps (High Priority)**

#### 1. **Video Streaming & Media Platform**
**Current**: None
**Why Needed**:
- Recorded lectures need streaming infrastructure
- Video-on-demand for course materials
- Live event broadcasting
- Integration with existing LMS

**Recommended Services**:
- **Jellyfin** - Free Software media system (alternative to Plex/Emby)
  - License: GPL-2.0
  - Tier: Standard
  - Use case: Video library, lecture recordings
  - Why: Mature, self-hosted, excellent codec support

- **PeerTube** - Decentralized video hosting (alternative to YouTube)
  - License: AGPL-3.0
  - Tier: High
  - Use case: Educational video platform
  - Why: Built for institutions, federation support

#### 2. **Password Manager / Secrets Management**
**Current**: Self-Service Password only
**Why Needed**:
- Shared credentials for services
- Team password management
- 2FA token storage
- Emergency access procedures

**Recommended Services**:
- **Bitwarden/Vaultwarden** - Self-hosted password manager
  - License: AGPL-3.0 (Vaultwarden)
  - Tier: High
  - Use case: Institutional password management
  - Why: Critical security tool, GDPR-compliant

- **Passbolt** - Collaborative password manager
  - License: AGPL-3.0
  - Tier: High
  - Use case: Team password sharing
  - Why: Designed for teams, GPG-based

#### 3. **Backup & Disaster Recovery**
**Current**: k8up mentioned in platform specs, not in landscape
**Why Needed**:
- Comprehensive backup solution
- Disaster recovery planning
- Compliance with data retention requirements
- Integration with existing services

**Recommended Services**:
- **Restic** - Modern backup program
  - License: BSD-2-Clause
  - Tier: Critical
  - Use case: Encrypted, deduplicated backups
  - Why: Already used via k8up, should be visible

- **BorgBackup** - Deduplicating archiver
  - License: BSD-3-Clause
  - Tier: High
  - Use case: Long-term archival
  - Why: Compression, encryption, deduplication

- **Restic-Backup** (already in use)
  - Tier: Critical
  - Use case: Automated Kubernetes backups

### 🎯 **High Priority Gaps**

#### 4. **Container Registry**
**Current**: None
**Why Needed**:
- Store custom Docker images
- Mirror public images
- Security scanning
- Version control

**Recommended Services**:
- **Harbor** - Cloud-native container registry
  - License: Apache-2.0
  - Tier: High
  - Use case: Private container registry
  - Why: Vulnerability scanning, RBAC, replication

- **Distribution** (Docker Registry)
  - License: Apache-2.0
  - Tier: Standard
  - Use case: Simple registry
  - Why: Official Docker registry

#### 5. **CI/CD Platform**
**Current**: None
**Why Needed**:
- Automated testing
- Continuous deployment
- Code quality checks
- Release management

**Recommended Services**:
- **GitLab CE** - Complete DevOps platform
  - License: MIT (Community Edition)
  - Tier: High
  - Use case: Git hosting, CI/CD, registries
  - Why: Self-hosted, comprehensive, GDPR-compliant

- **Drone** - Container-native CI/CD
  - License: Apache-2.0
  - Tier: Standard
  - Use case: Lightweight CI/CD
  - Why: Simple, Docker-native

- **Woodpecker CI** - Community fork of Drone
  - License: Apache-2.0
  - Tier: Standard
  - Use case: Modern CI/CD
  - Why: Active development, community-driven

#### 6. **Monitoring & Observability**
**Current**: Mentioned in platform specs, not in landscape
**Why Needed**:
- Service health monitoring
- Performance metrics
- Log aggregation
- Alerting

**Recommended Services**:
- **Prometheus** - Metrics collection
  - License: Apache-2.0
  - Tier: Critical
  - Use case: Metrics and alerting
  - Why: Industry standard, already in use

- **Grafana** - Visualization platform
  - License: AGPL-3.0
  - Tier: Critical
  - Use case: Dashboards and visualization
  - Why: Beautiful dashboards, multi-source

- **Loki** - Log aggregation
  - License: AGPL-3.0
  - Tier: High
  - Use case: Centralized logging
  - Why: Grafana integration, efficient

- **Prometheus Alertmanager**
  - License: Apache-2.0
  - Tier: High
  - Use case: Alert routing
  - Why: Prometheus integration

#### 7. **Database Management**
**Current**: PostgreSQL/MariaDB mentioned generically
**Why Needed**:
- Visual database management
- Query optimization
- Backup/restore GUI
- Performance monitoring

**Recommended Services**:
- **pgAdmin** - PostgreSQL management
  - License: PostgreSQL License
  - Tier: Standard
  - Use case: PostgreSQL administration
  - Why: De facto standard

- **phpMyAdmin** - MariaDB/MySQL management
  - License: GPL-2.0
  - Tier: Standard
  - Use case: MariaDB administration
  - Why: Widely used

### 💡 **Medium Priority Gaps**

#### 8. **Search Engine**
**Current**: None
**Why Needed**:
- Unified search across all services
- Better user experience
- Content discovery

**Recommended Services**:
- **Meilisearch** - Lightning-fast search
  - License: MIT
  - Tier: Standard
  - Use case: Unified search
  - Why: Easy to deploy, typo-tolerant

- **Typesense** - Typo-tolerant search
  - License: Apache-2.0
  - Tier: Standard
  - Use case: Search-as-you-type
  - Why: Fast, modern API

- **SearXNG** - Privacy-respecting metasearch
  - License: AGPL-3.0
  - Tier: Standard
  - Use case: Private internet search
  - Why: No tracking, federated

#### 9. **Analytics & Privacy**
**Current**: None
**Why Needed**:
- Understand usage patterns
- Improve services
- GDPR compliance
- No Google Analytics

**Recommended Services**:
- **Matomo** - Open-source analytics
  - License: GPL-3.0
  - Tier: High
  - Use case: Web analytics
  - Why: GDPR-compliant, self-hosted

- **Plausible Analytics** - Lightweight analytics
  - License: AGPL-3.0 (self-hosted)
  - Tier: Standard
  - Use case: Privacy-friendly analytics
  - Why: No cookies, lightweight

- **Umami** - Simple analytics
  - License: MIT
  - Tier: Standard
  - Use case: Privacy-first analytics
  - Why: Simple, fast, privacy-focused

#### 10. **Code Hosting & Collaboration**
**Current**: None
**Why Needed**:
- Source code management
- Issue tracking
- Code review
- Wiki/Documentation

**Recommended Services**:
- **Gitea** - Lightweight Git hosting
  - License: MIT
  - Tier: High
  - Use case: Self-hosted Git
  - Why: Lightweight, easy to install

- **Forgejo** - Community fork of Gitea
  - License: MIT
  - Tier: High
  - Use case: Git hosting with CI/CD
  - Why: Community-driven, sustainable

#### 11. **Communication Enhancement**
**Current**: Email, Matrix, Helpdesk
**Why Needed**:
- Team chat
- Video calls (standalone)
- Conference bridges
- Status pages

**Recommended Services**:
- **Mattermost** - Self-hosted Slack alternative
  - License: AGPL-3.0
  - Tier: High
  - Use case: Team chat
  - Why: Enterprise-grade, integrations

- **Rocket.Chat** - Team communication
  - License: MIT
  - Tier: Standard
  - Use case: Omnichannel messaging
  - Why: Multi-platform support

- **Jitsi Meet** (already in use, but could be highlighted more)
  - Tier: High
  - Use case: Standalone video calls
  - Why: No account needed, full-featured

### 🔬 **Specialized/Niche Gaps**

#### 12. **Research & Academic**
**Current**: None specific
**Why Needed**:
- Reference management
- Research data management
- Publication platforms
- Open Science tools

**Recommended Services**:
- **Zotero** (with web API)
  - License: AGPL-3.0
  - Tier: Standard
  - Use case: Reference management
  - Why: Open-source, academic standard

- **Open Science Framework** (OSF)
  - License: Apache-2.0
  - Tier: Standard
  - Use case: Research collaboration
  - Why: Open science infrastructure

#### 13. **Translation & Localization**
**Current**: None
**Why Needed**:
- Multi-language support for international students
- Document translation
- Website localization

**Recommended Services**:
- **Weblate** - Translation platform
  - License: BSD-3-Clause
  - Tier: Standard
  - Use case: Collaborative translation
  - Why: Git integration, quality checks

- **LibreTranslate** - Self-hosted translation
  - License: AGPL-3.0
  - Tier: Standard
  - Use case: Machine translation
  - Why: Privacy-respecting, self-hosted

#### 14. **Forms & Surveys Enhancement**
**Current**: LimeSurvey only
**Why Needed**:
- Simple form creation
- Event registration
- Application forms
- Data collection

**Recommended Services**:
- **Formbricks** - Survey platform
  - License: AGPL-3.0
  - Tier: Standard
  - Use case: Modern surveys
  - Why: Open-source Typeform alternative

- **Kobotoolbox** - Data collection
  - License: AGPL-3.0
  - Tier: Standard
  - Use case: Field data collection
  - Why: Research-grade, offline support

### 🛡️ **Security & Compliance**

#### 15. **Security Tools**
**Current**: None specific
**Why Needed**:
- Vulnerability scanning
- Security monitoring
- Intrusion detection
- Compliance scanning

**Recommended Services**:
- **Wazuh** - Security monitoring
  - License: GPL-2.0
  - Tier: High
  - Use case: SIEM, intrusion detection
  - Why: Comprehensive, free

- **OpenVAS** - Vulnerability scanner
  - License: GPL-2.0
  - Tier: Standard
  - Use case: Security scanning
  - Why: Industry standard

- **Falco** - Runtime security
  - License: Apache-2.0
  - Tier: High
  - Use case: Container security
  - Why: Cloud-native, CNCF graduated

## 📊 Priority Matrix

### **Must-Have (Critical/High Tier)**

| Service | Category | Tier | Priority | Rationale |
|---------|----------|------|----------|-----------|
| **Harbor** | Container Registry | High | 🔴 P0 | Critical for custom images |
| **GitLab CE** | CI/CD | High | 🔴 P0 | Essential for development workflow |
| **Prometheus** | Monitoring | Critical | 🔴 P0 | Already in use, needs visibility |
| **Grafana** | Monitoring | Critical | 🔴 P0 | Already in use, needs visibility |
| **Bitwarden/Vaultwarden** | Password Manager | High | 🟠 P1 | Security essential |
| **Jellyfin** | Video Streaming | Standard | 🟠 P1 | Lecture recordings |

### **Should-Have (Standard Tier)**

| Service | Category | Tier | Priority | Rationale |
|---------|----------|------|----------|-----------|
| **Loki** | Logging | High | 🟡 P2 | Log aggregation |
| **Matomo** | Analytics | High | 🟡 P2 | GDPR compliance |
| **Gitea/Forgejo** | Code Hosting | High | 🟡 P2 | Source code management |
| **Meilisearch** | Search | Standard | 🟡 P2 | Better UX |
| **Wazuh** | Security | High | 🟡 P2 | Security monitoring |

### **Nice-to-Have (Low Tier)**

| Service | Category | Tier | Priority | Rationale |
|---------|----------|------|----------|-----------|
| **PeerTube** | Video Platform | High | 🟢 P3 | Alternative to Jellyfin |
| **Weblate** | Translation | Standard | 🟢 P3 | i18n support |
| **Formbricks** | Forms | Standard | 🟢 P3 | Modern form builder |
| **LibreTranslate** | Translation | Standard | 🟢 P3 | Privacy-respecting translation |
| **OpenVAS** | Security | Standard | 🟢 P3 | Vulnerability scanning |

## 💰 Cost-Benefit Analysis

### High ROI (Add Immediately)

1. **Prometheus + Grafana** - Already deployed, just need visibility
   - Cost: €0 (already deployed)
   - Benefit: Operational excellence
   - ROI: ∞

2. **Harbor** - Critical for custom development
   - Cost: ~€0 (self-hosted)
   - Benefit: Image management, security
   - ROI: Very High

3. **GitLab CE** - Essential for any development
   - Cost: ~€0 (self-hosted, but resource-intensive)
   - Benefit: Complete DevOps platform
   - ROI: High (if institution does development)

### Medium ROI (Add When Needed)

4. **Bitwarden/Vaultwarden** - Security improvement
   - Cost: ~€0
   - Benefit: Centralized credential management
   - ROI: High (security-critical)

5. **Jellyfin** - Media management
   - Cost: ~€0
   - Benefit: Lecture recordings, video library
   - ROI: Medium (depends on use case)

6. **Matomo** - Analytics
   - Cost: ~€0
   - Benefit: GDPR-compliant analytics
   - ROI: Medium

### Low ROI (Add Later)

7. **Gitea/Forgejo** - If not using GitLab
8. **Meilisearch** - Nice to have
9. **PeerTube** - If Jellyfin isn't enough
10. **Weblate** - If multi-language support is needed

## 🎯 Recommended Action Plan

### **Phase 1: Visibility (Immediate - Week 1)**

Add services already in use but not visible in landscape:
- Prometheus
- Grafana
- Loki
- Restic (via k8up)
- Traefik (already exposed via Traefik)
- Docker (visible via containers)

**Effort**: Low (just add to data files)
**Value**: Medium (complete ecosystem view)

### **Phase 2: Critical Gaps (Month 1)**

Add high-priority missing services:
- **Harbor** - Container registry
- **GitLab CE** - CI/CD platform
- **Bitwarden/Vaultwarden** - Password management
- **Grafana** (if not already counted)

**Effort**: Medium (deployment + integration)
**Value**: High (fills critical gaps)

### **Phase 3: Quality of Life (Month 2-3)**

Add services that improve user experience:
- **Matomo** - Analytics
- **Meilisearch** - Unified search
- **Jellyfin** - Video platform
- **Loki** - Centralized logging

**Effort**: Medium-High
**Value**: Medium-High

### **Phase 4: Specialized (Month 3-6)**

Add specialized services based on institutional needs:
- **PeerTube** (if video is critical)
- **Weblate** (if multi-language)
- **Wazuh** (if security is critical)
- **OpenVAS** (if compliance scanning needed)

**Effort**: High
**Value**: Specialized

## 💡 Key Recommendations

### **Top 5 Services to Add Immediately**

1. **Prometheus + Grafana** (already deployed, just add to landscape)
2. **Harbor** (container registry, critical for custom development)
3. **GitLab CE** (CI/CD, essential for any development)
4. **Bitwarden/Vaultwarden** (password management, security)
5. **Matomo** (analytics, GDPR-compliant)

### **Services to Consider Based on Use Case**

- **Educational Institution**: Jellyfin, PeerTube, Matomo, Weblate
- **Research Institution**: Open Science Framework, Zotero, OpenVAS
- **Public Administration**: Wazuh, OpenVAS, Matomo
- **Small Institution**: Gitea, Vaultwarden, Matomo

### **Services to Avoid**

- **Commercial alternatives** (Microsoft 365, Google Workspace, Slack)
- **Vendor lock-in tools** (proprietary systems)
- **Cloud-only services** (violates digital sovereignty)

## 📈 Expected Impact

### **Quantitative Impact**

- **Current**: integrated services, 5 categories
- **After Phase 1**: 30 services, 7 categories (+20%)
- **After Phase 2**: 35 services, 9 categories (+40%)
- **After Phase 3**: 40 services, 11 categories (+60%)
- **After Phase 4**: 45 services, 13 categories (+80%)

### **Qualitative Impact**

- **Completeness**: From ~70% to ~95% ecosystem coverage
- **Operational Excellence**: Better monitoring and management
- **Security**: Improved credential management and scanning
- **User Experience**: Better search and analytics
- **Developer Experience**: CI/CD and container registry

## 🎯 Conclusion

The current integrated-service ecosystem is solid but has clear gaps in:

1. **Operations** (monitoring, CI/CD, container registry)
2. **Security** (password management, vulnerability scanning)
3. **Analytics** (GDPR-compliant analytics)
4. **Media** (video streaming/hosting)

**Recommended immediate action**: Add Phase 1 services (Prometheus, Grafana, etc.) which are already deployed but not visible. This is low-effort, high-value work that completes the ecosystem view.

**Next priority**: Phase 2 services (Harbor, GitLab, Bitwarden) which fill critical operational gaps.

**Long-term**: Phase 3-4 services based on specific institutional needs.

The openDesk Edu ecosystem is on track to be one of the most comprehensive open-source educational technology platforms. With these additions, it would achieve near-complete coverage of educational institution needs while maintaining the digital sovereignty and open-source principles that make it valuable.
