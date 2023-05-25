import { Router, edgioRoutes } from '@edgio/core';
import { isProductionBuild } from '@edgio/core/environment';

const router = new Router();

router.match('/:path*', ({ cache, renderWithApp }) => {
  cache({
    edge: false,
    browser: false,
  });
  renderWithApp();
});

router.match('/service-worker.js', ({ serviceWorker }) => {
  serviceWorker('.edgio/temp/service-worker.js');
});

if (isProductionBuild()) {
  router.static('public');

  router.match('/_next/static/:path*', ({ serveStatic }) => {
    serveStatic('.next/static/:path*');
  });
}

router.use(edgioRoutes);

module.exports = router;
