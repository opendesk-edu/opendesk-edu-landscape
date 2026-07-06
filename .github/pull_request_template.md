## Description

<!-- Briefly describe what this PR changes in the landscape -->

## Type of Change

- [ ] New service addition
- [ ] Service update (info, tier, description)
- [ ] Service removal
- [ ] Visual/UI change
- [ ] Infrastructure (CI, build, deploy)
- [ ] Documentation

## Service Addition Checklist

If adding a new service:

- [ ] Service is **open-source** (license listed in PR)
- [ ] Category and subcategory are appropriate
- [ ] Tier classification justified (Critical/High/Standard/Low)
- [ ] Repository URL points to source code
- [ ] License matches the project's actual license
- [ ] Tags are relevant and concise
- [ ] Run `npm run build` to regenerate data/services.js
- [ ] Logo added to `hosted_logos/` (optional but recommended)

## Verification

- [ ] `npm run build` completes without errors
- [ ] `data/services.js` is committed and up-to-date
- [ ] No hardcoded service data remains in `script.js`
