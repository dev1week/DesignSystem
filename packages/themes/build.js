import run from '@1week/esbuild-config';
import pkg from './package.json' assert { type: 'json' };

run({
  pkg,
})
