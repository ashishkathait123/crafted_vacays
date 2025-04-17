import axios from "axios";
import * as cheerio from "cheerio";

interface Destination {
  name: string;
  slug: string;
  href: string;
  image?: string;
  tourCount?: number;
  parent: string;
}

function getSlugFromText(name?: string): string {
  if (typeof name !== "string") return "";
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export async function getAllDestinations(): Promise<Destination[]> {
  try {
    const res = await axios.get(
      "https://craftedvacays.com/wp-json/wp/v2/pages?slug=destination-list-2&per_page=100"
    );

    const page = res.data?.[0];
    const html = page?.content?.rendered || "";

    if (!html) {
      console.warn("❌ No HTML content found in WordPress API response.");
      return [];
    }

    const $ = cheerio.load(html);
    const destinations: Destination[] = [];

    $("div.location-item").each((_, element) => {
      const anchor = $(element).find("a.title-location");
      const href = anchor.attr("href")?.trim();
      const name = anchor.find("h2.title-tours").text().trim();
      const slug = getSlugFromText(name);

      const img = anchor.find("img").attr("src")?.trim() || "";
      const tourText = anchor.find(".location-count").text().trim();
      const tourCount = parseInt(tourText.match(/\d+/)?.[0] || "0");

      // Extract 'parent' from the second-to-last segment in the URL
      const parent = href?.split("/").filter(Boolean).slice(-2, -1)[0] || "";

      if (!slug || !name || !href || !parent) {
        console.warn(
          `❌ Skipping invalid destination: ${JSON.stringify({
            name,
            slug,
            href,
            parent,
          })}`
        );
        return;
      }

      destinations.push({
        name,
        slug,
        href,
        image: img,
        tourCount,
        parent,
      });
    });

    return destinations;
  } catch (err) {
    console.error("🔥 Error fetching destinations:", err);
    return [];
  }
}
