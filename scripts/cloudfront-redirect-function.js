// CloudFront Function: 301 redirects for old WordPress URLs
// Deploy as viewer-request function on the gilberttm.org distribution
//
// Handles:
//   1. Old WordPress blog URLs: /yyyy/mm/dd/slug/  →  /blog/slug/
//   2. Specific path-to-path mappings (add to REDIRECTS below as needed)
//   3. S3 302 trailing-slash redirects upgraded to 301 for SEO

function handler(event) {
  var request = event.request;
  var uri = request.uri;
  var host = 'https://gilberttm.org';

  // Normalize: strip /index.html suffix for lookup
  if (uri.endsWith('/index.html')) {
    uri = uri.slice(0, -10);
  }
  var key = uri.endsWith('/') ? uri : uri + '/';

  // ---- 1. Old WordPress date-based blog URLs ----
  // Pattern: /2024/03/14/some-post-slug/  →  /blog/some-post-slug/
  var blogMatch = key.match(/^\/(\d{4})\/(\d{2})\/(\d{2})\/([^\/]+)\/$/);
  if (blogMatch) {
    var slug = blogMatch[4];
    return {
      statusCode: 301,
      statusDescription: 'Moved Permanently',
      headers: {
        'location': { value: host + '/blog/' + slug + '/' },
        'cache-control': { value: 'max-age=86400' }
      }
    };
  }

  // ---- 2. Specific path-to-path redirects ----
  // Add entries here for posts whose slug changed during the WordPress → Next.js migration,
  // or category/tag pages that should land on a specific new page.
  var REDIRECTS = {
    // '/category/some-category/': '/blog/',
    // '/old-permalink/': '/blog/new-permalink/',
  };
  if (REDIRECTS[key]) {
    return {
      statusCode: 301,
      statusDescription: 'Moved Permanently',
      headers: {
        'location': { value: host + REDIRECTS[key] },
        'cache-control': { value: 'max-age=86400' }
      }
    };
  }

  // ---- 3. Upgrade S3's 302 trailing-slash redirects to 301 ----
  // S3 returns 302 for /blog → /blog/, but Google won't index 302s
  if (uri !== '/' && !uri.endsWith('/') && uri.indexOf('.') === -1) {
    return {
      statusCode: 301,
      statusDescription: 'Moved Permanently',
      headers: {
        'location': { value: host + uri + '/' },
        'cache-control': { value: 'max-age=86400' }
      }
    };
  }

  return request;
}
