import esbuild from "esbuild";
import pkg from "./package.json" assert { type: "json" };

const dev = process.argv.includes("--dev");
const minify = !dev;

const watch = process.argv.includes("--watch");

const external = Object.keys({
  ...pkg.dependencies,
  ...pkg.peerDependencies,
});

const baseConfig = {
  entryPoints: ["src/index.ts"],
  bundle: true,
  minify,
  sourcemap: true,
  outdir: "dist",
  target: "es2019",
  external,
  //   watch,
};

//병렬화
Promise.all([
  //es 모듈 제공하기
  esbuild.build({
    ...baseConfig,
    format: "esm",
  }),
  // cjs 빌드 제공하기
  esbuild.build({
    ...baseConfig,
    format: "cjs",
    //확장자를 전부 .js에서 .cjs로 바꾸기
    outExtension: {
      ".js": ".cjs",
    },
  }),
]).catch(() => {
  process.exit(1);
});
