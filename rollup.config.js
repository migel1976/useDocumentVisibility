import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";

const packageJson = require("./package.json");

export default [
  {
    input: "src/useDocumentVisibility.js",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
    ],
    external: ["react"],
  },
  {
    input: "src/useDocumentVisibility.js",
    output: [{ file: packageJson.types, format: "es" }],
    plugins: [dts.default()],
  },
];