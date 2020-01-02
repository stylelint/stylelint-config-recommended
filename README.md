# stylelint-config-recommended

Recommended [Stylelint](https://github.com/stylelint/stylelint) configuration for css/scss projects

## Installation

Install this package and [stylelint](https://github.com/stylelint/stylelint) package on your project

```bash
npm install stylelint @coara/stylelint-config --D
```

## Usage

If you've installed `stylelint-config-recommended` locally within your project, just set your `stylelint` config to:

```json
{
  "extends": "@coara/stylelint-config"
}
```

### Extending the config

Simply add a `"rules"` key to your config, then add your overrides and additions there.

For example, to change the `at-rule-no-unknown` rule to use its `ignoreAtRules` option, turn off the `block-no-empty` rule, and add the `unit-whitelist` rule:

```json
{
  "extends": "@coara/stylelint-config",
  "rules": {
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": ["extends"]
      }
    ],
    "block-no-empty": null,
    "unit-whitelist": ["em", "rem", "s"]
  }
}
```

---

Package powered by [coara TM](https://coara.co)
