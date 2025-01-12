'use strict';

module.exports = {
	rules: {
		'annotation-no-unknown': true,
		'at-rule-descriptor-no-unknown': true,
		'at-rule-descriptor-value-no-unknown': true,
		'at-rule-no-deprecated': true,
		'at-rule-no-unknown': true,
		'at-rule-prelude-no-invalid': [true, { ignoreAtRules: ['media'] }],
		'block-no-empty': true,
		'comment-no-empty': true,
		'custom-property-no-missing-var-function': true,
		'declaration-block-no-duplicate-custom-properties': true,
		'declaration-block-no-duplicate-properties': [
			true,
			{
				ignore: ['consecutive-duplicates-with-different-syntaxes'],
			},
		],
		'declaration-block-no-shorthand-property-overrides': true,
		'declaration-property-value-keyword-no-deprecated': true,
		'declaration-property-value-no-unknown': true,
		'font-family-no-duplicate-names': true,
		'font-family-no-missing-generic-family-keyword': true,
		'function-calc-no-unspaced-operator': true,
		'keyframe-block-no-duplicate-selectors': true,
		'keyframe-declaration-no-important': true,
		'media-feature-name-no-unknown': true,
		'media-feature-name-value-no-unknown': true,
		'media-query-no-invalid': true,
		'named-grid-areas-no-invalid': true,
		'no-descending-specificity': true,
		'no-duplicate-at-import-rules': true,
		'no-duplicate-selectors': true,
		'no-empty-source': true,
		'no-invalid-double-slash-comments': true,
		'no-invalid-position-at-import-rule': true,
		'no-irregular-whitespace': true,
		'property-no-unknown': true,
		'selector-anb-no-unmatchable': true,
		'selector-pseudo-class-no-unknown': true,
		'selector-pseudo-element-no-unknown': true,
		'selector-type-no-unknown': [
			true,
			{
				ignore: ['custom-elements'],
			},
		],
		'string-no-newline': [true, { ignore: ['at-rule-preludes', 'declaration-values'] }],
	},
};
