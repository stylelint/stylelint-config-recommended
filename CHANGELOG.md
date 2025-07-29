# Changelog

## 17.0.0

- Removed: `stylelint` less than `16.23.0` from peer dependencies.
- Added: `media-type-no-deprecated` rule.
- Added: `nesting-selector-no-missing-scoping-root` rule.
- Added: `no-invalid-position-declaration` rule.
- Added: `property-no-deprecated` rule.

## 16.0.0

- Removed: `stylelint` less than `16.16.0` from peer dependencies.
- Added: `syntax-string-no-invalid` rule.

## 15.0.0

This release replaces four rules with broader and more capable ones that validate CSS against syntaxes defined by W3C: `at-rule-descriptor-value-no-unknown`, `at-rule-prelude-no-invalid` and `declaration-property-value-no-unknown`.

- Removed: `stylelint` less than `16.13.0` from peer dependencies.
- Removed: `color-no-invalid-hex` rule.
- Removed: `function-linear-gradient-no-nonstandard-direction` rule.
- Removed: `function-no-unknown` rule.
- Removed: `unit-no-unknown` rule.
- Changed: `string-no-newline` rule option to `{ ignore: ['at-rule-preludes', 'declaration-values'] }]`.
- Added: `at-rule-descriptor-no-unknown` rule.
- Added: `at-rule-descriptor-value-no-unknown` rule.
- Added: `at-rule-no-deprecated` rule.
- Added: `at-rule-prelude-no-invalid` rule.
- Added: `declaration-property-value-keyword-no-deprecated` rule.
- Added: `declaration-property-value-no-unknown` rule.
- Added: `media-feature-name-value-no-unknown` rule.

## 14.0.1

- Fixed: missing `funding` field in `package.json`.

## 14.0.0

- Removed: `stylelint` less than `16.0.0` from peer dependencies.
- Removed: Node.js less than `18.12.0` support.

## 13.0.0

- Removed: `stylelint` less than `15.10.0` from peer dependencies.
- Added: `media-query-no-invalid` rule.

## 12.0.0

- Removed: `stylelint` less than `15.5.0` from peer dependencies.
- Changed: `declaration-block-no-duplicate-properties` option to `ignore: ['consecutive-duplicates-with-different-syntaxes']`.

## 11.0.0

- Removed: `stylelint` less than `15.3.0` from peer dependencies.
- Added: `selector-anb-no-unmatchable` rule.

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
