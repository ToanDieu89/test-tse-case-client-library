import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import collectSass from "rollup-plugin-collect-sass";
import image from "rollup-plugin-image";
import json from "rollup-plugin-json";
import typescript from 'rollup-plugin-typescript';
// import uglify from "rollup-plugin-uglify";

var config = {
  input: "src/stories/export.js",
  output: {
    file: "bundle.js",
    format: "cjs",
    sourceMap : false
  },
  plugins: [
    resolve({
      jsnext: true,
      main: true
    }),
    collectSass({ include: ["src/assets/style/main.scss"], importOnce: true }),
    image(),
    babel({
      exclude: ["node_modules/**", "*.json"],
      presets: ["es2015-rollup", "react", "stage-1"],
      plugins: ["external-helpers", "syntax-dynamic-import"],
      babelrc: false
    }),
    json({
      exclude: ["node_modules/**"]
    }),
    commonjs({
      include: "node_modules/**",
      namedExports: {
        "./node_modules/react/index.js": [
          "cloneElement",
          "createElement",
          "PropTypes",
          "Children",
          "Component",
          "React"
        ]
      },
      sourceMap: false
    }),
    // uglify.uglify({
    //   compress: {
    //     warnings: false
    //   }
    // }),
    typescript()
  ]
};

module.exports = config;
