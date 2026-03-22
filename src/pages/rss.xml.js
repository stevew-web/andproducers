import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const articles = await getCollection('articles');
  const sorted = articles.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'AndProducers',
    description: 'The modern handbook for marketing production — guides, templates, playbooks and weekly articles.',
    site: context.site,
    items: sorted.map(article => ({
      title: article.data.title,
      pubDate: article.data.pubDate,
      description: article.data.description,
      link: `/articles/${article.slug}/`,
    })),
  });
}
