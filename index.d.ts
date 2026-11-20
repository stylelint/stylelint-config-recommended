import type { Config } from 'stylelint';

declare const config: Required<Pick<Config, 'rules'>>;
export default config;
