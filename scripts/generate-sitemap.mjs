import fs from 'fs';

const SITE = 'https://www.mentormatch.com/app';

// Pages you don't want indexed (add your own)
const EXCLUDE = [/^\/api/, /^\/_/, /^\/login/, /^\/dashboard/, /^\/thank-you/];

const manifest = JSON.parse(
  fs.readFileSync('.next/prerender-manifest.json', 'utf8')
);

const routes = Object.keys(manifest.routes)
  .map((r) => (r.length > 1 && r.endsWith('/') ? r.slice(0, -1) : r))
  .filter((r) => !EXCLUDE.some((rx) => rx.test(r)))
  .sort();

const today = new Date().toISOString().split('T')[0];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${SITE}${r === '/' ? '' : r}</loc>
    <lastmod>${today}</lastmod>
  </url>`
  )
  .join('\n')}
</urlset>`;

fs.mkdirSync('public', { recursive: true });
fs.writeFileSync('public/sitemap.xml', xml);
console.log(`Sitemap generated with ${routes.length} URLs`);