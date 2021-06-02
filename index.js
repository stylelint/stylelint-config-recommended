"use strict";

module.exports = {
  "rules": {
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": ["function", "if", "each", "include", "mixin", "return"]
      }
    ],
    "block-no-empty": true,
    "color-no-invalid-hex": true,
    "comment-no-empty": true,
    "declaration-block-no-duplicate-properties": [
      true,
      {
        "ignore": ["consecutive-duplicates-with-different-values"]
      }
    ],
    "declaration-block-no-shorthand-property-overrides": true,
    "font-family-no-duplicate-names": true,
    "font-family-no-missing-generic-family-keyword": true,
    "function-calc-no-invalid": true,
    "function-calc-no-unspaced-operator": true,
    "function-linear-gradient-no-nonstandard-direction": true,
    "keyframe-declaration-no-important": true,
    "media-feature-name-no-unknown": true,
    "no-descending-specificity": true,
    "declaration-no-important": true,
    "no-duplicate-at-import-rules": true,
    "no-duplicate-selectors": true,
    "no-empty-source": true,
    "no-extra-semicolons": true,
    "no-invalid-double-slash-comments": true,
    "property-no-unknown": true,
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-element-no-unknown": [
      true,
      {
        "ignorePseudoElements": ["ng-deep", "host"]
      }
    ],
    "selector-type-no-unknown": [true, { "ignoreTypes": ["/^[a-zA-Z]([a-zA-Z0-9]*-[a-zA-Z0-9]+)+/"] }],
    "string-no-newline": true,
    "unit-no-unknown": true
  }
};
