# Changelog

## 10.1.0

- Added: `stylelint` 16 and 17 to peer dependencies. The range is now
  `^15.0.0 || ^16.0.0 || ^17.0.0`. No rule changed.

  Consumers on stylelint 16 or 17 could not install this config at all — npm
  failed the resolution outright — and were working around it with an
  `overrides` entry. Those can now be removed.

- Changed: the test suite runs on Vitest instead of Jest. stylelint is ESM-only
  from v16 and Jest cannot link it inside its VM at any version, which is the
  same reason stylelint itself made this move. Test-only: `files` still
  publishes `index.js` alone, so nothing reaches consumers.

- Added: two tests asserting that every rule this config sets still exists in
  the installed stylelint and is not deprecated. That is what makes a range
  spanning three majors a claim rather than a hope — the suite is run against
  15.11.0, 16.26.1 and 17.14.1.

## 10.0.1

- Removed: deprecated `no-extra-semicolons` rule.

## 10.0.0

- Removed: `stylelint` less than `15.0.0` from peer dependencies.

## 9.0.0

- Removed: `stylelint` less than `14.10.0` from peer dependencies.
- Added: `annotation-no-unknown` rule.

## 8.0.0

- Removed: `stylelint` less than `14.8.0` from peer dependencies.
- Added: `keyframe-block-no-duplicate-selectors` rule.

## 7.0.0

- Removed: `stylelint` less than `14.4.0` from peer dependencies.
- Added: `function-no-unknown` rule.

## 6.0.0

- Removed: `stylelint` less than `14.0.0` from peer dependencies.
- Removed: `function-calc-no-invalid` rule.
- Added: `custom-property-no-missing-var-function` rule.

## 5.0.0

- Removed: `stylelint` less than `13.13.0` from peer dependencies.
- Added: `no-invalid-position-at-import-rule` rule.
- Added: `no-irregular-whitespace` rule.
- Fixed: `selector-type-no-unknown` for custom elements.

## 4.0.0

- Removed: `stylelint` less than `13.12.0` from peer dependencies.
- Added: `declaration-block-no-duplicate-custom-properties` rule.
- Added: `named-grid-areas-no-invalid` rule.

## 3.0.0

- Removed: `stylelint` < 10.1.0 from peer dependencies. `stylelint@10.1.0+` is required now.
- Added: `function-calc-no-invalid` rule.

## 2.2.0

- Added: `stylelint@10` to peer dependency range.

## 2.1.0

- Added: `stylelint@9` to peer dependency range.

## 2.0.1

- Removed: `declaration-block-no-redundant-longhand-properties` rule. This time it is actually removed.

## 2.0.0

- Removed: `declaration-block-no-redundant-longhand-properties` rule.
- Removed: `shorthand-property-no-redundant-values` rule.
- Added: `font-family-no-missing-generic-family-keyword` rule.
- Added: `no-descending-specificity` rule.
- Added: `no-duplicate-at-import-rules` rule.
- Added: `no-duplicate-selectors` rule.

## 1.0.0

- Use `stylelint@8`.

## 0.1.0

- Initial release
