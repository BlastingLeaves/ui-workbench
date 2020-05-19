import babel from '@rollup/plugin-babel'
import pkg from './package.json'

module.exports = {
    input: './src/components/index.js',
    output: {
        file: pkg.main,
        format: 'esm',
    },
    plugins: [
        babel({babelHelpers: 'bundled'})
    ]
}