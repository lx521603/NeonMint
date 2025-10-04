import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Dopi 不脱妆粉底液| Mia Wang | 米娅',
    description: ' 我是卖美妆创业的米娅, 一个混迹于抖音、视频号、小红书的自由主播。',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>es</language>`,
  });
}
