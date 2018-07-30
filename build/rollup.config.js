import babel from 'rollup-plugin-babel';

export default {
    input: 'src/index.js',
    plugins: [
        babel({
            babelrc: false,
            presets: [['env', { modules: false }]],
        }),
    ],
    output: {
        file: 'dist/index.js',
        format: 'umd',
        name: 'fromExponential',
    }
};