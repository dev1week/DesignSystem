import esbuild from "esbuild";
//공통 속성 뽑기
const baseConfig = {
  entryPoints: ["src/index.js"],
  bundle: true,
  minify: true,
  sourcemap: true,
  outdir: "dist",
};

//병렬화
Promise.all([
  //es 모듈 제공하기
  esbuild.build({
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
  console.error(...(data + "Build Failed"));
  ProcessingInstruction.exit(1);
});
