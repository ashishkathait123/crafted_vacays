import axios from 'axios';
import * as cheerio from 'cheerio';

export const fetchDestinationsFromWP = async () => {
  try {
    const res = await axios.get('https://craftedvacays.com/wp-json/wp/v2/pages?slug=all-countries');
    const data = res.data?.[0];

    if (!data || !data.content?.rendered) return [];

    const $ = cheerio.load(data.content.rendered);
    const destinations: any[] = [];

    $('.elementor-image-box-wrapper').each((_, el) => {
      const title = $(el).find('.elementor-image-box-title').text().trim();
      const image = $(el).find('img').attr('src');

      if (title && image) {
        destinations.push({
          title,
          slug: title.toLowerCase().replace(/\s+/g, '-'),
          images: [image],
          tours: Math.floor(Math.random() * 10) + 1,
          departures: Math.floor(Math.random() * 5) + 1,
        });
      }
    });

    return destinations;
  } catch (err) {
    console.error('Error fetching destinations:', err);
    return [];
  }
};
