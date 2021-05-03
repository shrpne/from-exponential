import baseConfig from './rollup.config';

import { terser } from 'rollup-plugin-terser';


const config = Object.assign({}, baseConfig, {output: Object.assign({}, baseConfig.output)});

config.plugins.push(terser()); // uglifyjs alternative with es6 support
config.output.file = config.output.file.replace(/\.js$/, '.min.js');

export default config;
