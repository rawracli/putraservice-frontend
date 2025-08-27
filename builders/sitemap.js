import GenerateSitemap from "react-router-sitemap-maker";
import Routes from "../src/routes/SitemapRoute";

async function buildSitemap() {
  const sitemap = await GenerateSitemap(Routes(), {
    baseUrl: "https://putraservice.com",
    hashrouting: false,
    changeFrequency: "monthly"
  });
  sitemap.toFile("./dist/sitemap.xml");
}

buildSitemap();