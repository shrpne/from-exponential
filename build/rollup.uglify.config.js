import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/index.js',
    plugins: [
        babel({
            babelrc: false,
            presets: [['env', { modules: false }]],
        }),
        terser(), // uglifyjs alternative with es6 support
    ],
    output: {
        file: 'dist/index.min.js',
        format: 'umd',
        name: 'fromExponential',
    }
};