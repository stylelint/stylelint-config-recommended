import config from '../index.js';
import fs from 'node:fs';
import stylelint from 'stylelint';

const validCss = fs.readFileSync('./__tests__/valid.css', 'utf-8');
const invalidCss = fs.readFileSync('./__tests__/invalid.css', 'utf-8');

describe('flags no warnings with valid css', () => {
	let result;

	beforeEach(async () => {
		result = await stylelint.lint({
			code: validCss,
			config,
		});
	});

	it('has no errors', () => {
		expect(result.errored).toBe(false);
	});

	it('flags no warnings', () => {
		expect(result.results[0].warnings).toHaveLength(0);
	});
});

describe('flags warnings with invalid css', () => {
	let result;

	beforeEach(async () => {
		result = await stylelint.lint({
			code: invalidCss,
			config,
		});
	});

	it('includes an error', () => {
		expect(result.errored).toBe(true);
	});

	it('flags one warning', () => {
		expect(result.results[0].warnings).toHaveLength(1);
	});

	it('corrects warning text', () => {
		expect(result.results[0].warnings[0].text).toBe(
			'Unexpected unknown type selector "madeup" (selector-type-no-unknown)',
		);
	});

	it('corrects rule flagged', () => {
		expect(result.results[0].warnings[0].rule).toBe('selector-type-no-unknown');
	});

	it('corrects severity flagged', () => {
		expect(result.results[0].warnings[0].severity).toBe('error');
	});

	it('corrects line number', () => {
		expect(result.results[0].warnings[0].line).toBe(1);
	});

	it('corrects column number', () => {
		expect(result.results[0].warnings[0].column).toBe(1);
	});
});

describe('deprecated rules are excluded', () => {
	it.each(Object.keys(config.rules))('%s', async (ruleName) => {
		const rule = await stylelint.rules[ruleName];

		expect(rule.meta.deprecated).toBeFalsy();
	});
});
