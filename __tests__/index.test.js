import { beforeEach, describe, expect, it } from 'vitest';

import config from '../index.js';
import fs from 'node:fs';
// stylelint is a devDependency and resolves fine at runtime; from v16 it
// publishes an ESM-only export map that eslint-plugin-node's CommonJS resolver
// cannot follow.
// eslint-disable-next-line node/no-missing-import
import stylelint from 'stylelint';

const validCss = fs.readFileSync('./__tests__/valid.css', 'utf-8');
const invalidCss = fs.readFileSync('./__tests__/invalid.css', 'utf-8');

describe('flags no warnings with valid css', () => {
	let result;

	beforeEach(() => {
		result = stylelint.lint({
			code: validCss,
			config,
		});
	});

	it('did not error', () => {
		return result.then((data) => expect(data.errored).toBeFalsy());
	});

	it('flags no warnings', () => {
		return result.then((data) => expect(data.results[0].warnings).toHaveLength(0));
	});
});

describe('flags warnings with invalid css', () => {
	let result;

	beforeEach(() => {
		result = stylelint.lint({
			code: invalidCss,
			config,
		});
	});

	it('did error', () => {
		return result.then((data) => expect(data.errored).toBeTruthy());
	});

	it('flags one warning', () => {
		return result.then((data) => expect(data.results[0].warnings).toHaveLength(1));
	});

	it('correct warning text', () => {
		return result.then((data) => {
			// Not an exact match: stylelint 17 reworded this from "Unexpected
			// unknown type selector" to "Unknown type selector", and this config
			// supports 15 through 17. Assert the parts that identify the problem,
			// which are the parts this config is responsible for.
			expect(data.results[0].warnings[0].text).toContain('type selector "madeup"');
			expect(data.results[0].warnings[0].text).toContain('(selector-type-no-unknown)');
		});
	});

	it('correct rule flagged', () => {
		return result.then((data) =>
			expect(data.results[0].warnings[0].rule).toBe('selector-type-no-unknown'),
		);
	});

	it('correct severity flagged', () => {
		return result.then((data) => expect(data.results[0].warnings[0].severity).toBe('error'));
	});

	it('correct line number', () => {
		return result.then((data) => expect(data.results[0].warnings[0].line).toBe(1));
	});

	it('correct column number', () => {
		return result.then((data) => expect(data.results[0].warnings[0].column).toBe(1));
	});
});

describe('rules stay in step with stylelint', () => {
	// These two are what make widening the peer range safe rather than hopeful.
	// A rule this config sets that stylelint has since deprecated, renamed or
	// removed would otherwise sit here doing nothing and say nothing.
	it('sets no rule stylelint marks deprecated', () => {
		const deprecated = Object.values(stylelint.rules)
			.filter((rule) => rule.meta && rule.meta.deprecated)
			.map((rule) => rule.ruleName);

		expect(Object.keys(config.rules).filter((name) => deprecated.includes(name))).toEqual([]);
	});

	it('sets no rule stylelint does not have', () => {
		const known = Object.keys(stylelint.rules);

		expect(Object.keys(config.rules).filter((name) => !known.includes(name))).toEqual([]);
	});
});
