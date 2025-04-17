import * as cheerio from 'cheerio';

export async function getDestinationsByParent(parent: string) {
  const res = await fetch(
    'https://craftedvacays.com/wp-json/wp/v2/pages?slug=destination-list-2&per_page=100'
  );
  const data = await res.json();

  if (!data.length) {
    console.error('No page data found for slug destination-list-2');
    return [];
  }

  const html = data[0].content.rendered;
  const $ = cheerio.load(html);

  const destinations: {
    name: string;
    href: string;
    image: string;
    parent: string;
  }[] = [];

  $('.location-item').each((_, el) => {
    const titleEl = $(el).find('.title-location');
    const imgEl = $(el).find('.thumbnail-location img');

    const name = titleEl.text().trim();
    const href = titleEl.attr('href') || '';
    const image = imgEl.attr('src') || '';

    // Get parent slug by stripping path from href
    const parentSlug = href
      .split('/destination/')
      .pop()
      ?.split('/')[0]
      .toLowerCase() || '';

    destinations.push({
      name,
      href,
      image,
      parent: parentSlug,
    });
  });

  return destinations.filter((dest) => dest.parent === parent.toLowerCase());
}
