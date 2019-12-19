import path from 'path';
import packageJson from './package.json';
import { terser } from 'rollup-plugin-terser';

const banner = `/*
 ${packageJson.description}

 @package ${packageJson.name}
 @author ${packageJson.author}
 @version ${packageJson.version}
 @license ${packageJson.license}
 @copyright (c) 2014-${new Date().getFullYear()}, ${packageJson.author}

*/
`;

export default {
    input: path.resolve(__dirname, './src/MagicWand.js'),
    output: [{
        format: 'esm',
        file: path.join(__dirname, `./dist/magic-wand.js`),
        sourcemap: true,
        banner: banner
    }, {
        format: 'esm',
        file: path.join(__dirname, `./dist/magic-wand.min.js`),
        sourcemap: true,
        banner: banner,
        plugins: [terser()]
    }]
};