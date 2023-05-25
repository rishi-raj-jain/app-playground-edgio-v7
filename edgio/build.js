const { join } = require('path');
const { DeploymentBuilder } = require('@edgio/core/deploy');

const appDir = process.cwd();

module.exports = async function build() {
  const builder = new DeploymentBuilder();
  builder.clearPreviousBuildOutput();
  await builder.exec(
    '__NEXT_PRIVATE_PREBUNDLED_REACT=next VERCEL_URL=true npx next build',
  );
  builder.addJSAsset(join(appDir, '.next', 'standalone'), 'dist');
  await builder.buildServiceWorker({
    swSrc: join(appDir, 'sw', 'service-worker.ts'),
    swDest: join(appDir, '.edgio', 'temp', 'service-worker.js'),
  });
  await builder.build();
};
