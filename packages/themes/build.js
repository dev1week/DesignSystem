import esbuild from "esbuild";

//es 모듈 제공하기
esbuild.build({
  entryPoints: ["src/index.js"],
  bundle: true,
  minify: true,
  sourcemap: true,
  outdir: "dist",
  format: "esm",
});
// cjs 빌드 제공하기
esbuild.build({
  entryPoints: ["src/index.js"],
  bundle: true,
  minify: true,
  sourcemap: true,
  outdir: "dist",
  format: "cjs",
  //확장자를 전부 .js에서 .cjs로 바꾸기
  outExtension: {
    ".js": ".cjs",
  },
});
