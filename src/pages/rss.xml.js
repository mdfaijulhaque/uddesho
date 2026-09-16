import rss from '@astrojs/rss';
import articles from '../content/articles/articles.json';
import scholarships from '../content/scholarships/scholarships.json';

export function GET(context) {
  const articleItems = articles.map((article) => ({
    title: article.title,
    description: article.summary,
    pubDate: new Date(article.published),
    link: `/articles/${article.slug}/`
  }));
  const scholarshipItems = scholarships.map((item) => ({
    title: `${item.name} — ${item.status}`,
    description: item.summary,
    pubDate: new Date('2026-08-05'),
    link: `/scholarships/${item.slug}/`
  }));
  return rss({ title: 'Uddesho Abroad Updates', description: 'নতুন article, country guide ও scholarship information update।', site: context.site, items: [...articleItems, ...scholarshipItems] });
}
