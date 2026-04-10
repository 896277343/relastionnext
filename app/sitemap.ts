import { MetadataRoute } from "next";
import { getAllPages, getAllPostsForSitemap } from "@/lib/wordpress";
import { siteConfig } from "@/site.config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, pages] = await Promise.all([
    getAllPostsForSitemap(),
    getAllPages(),
  ]);

  const staticPaths = [
    "/",
    "/about",
    "/contact",
    "/products",
    "/products/mobile-sf6-vacuum-pump-unit",
    "/products/sf6-gas-analyzer",
    "/products/sf6-gas-filling-cart",
    "/products/sf6-gas-filling-kit",
    "/products/sf6-gas-fittings",
    "/products/sf6-leak-detector",
    "/products/sf6-regeneration-system",
    "/products/sf6-room-monitor",
    "/products/sf6-service-carts",
    "/projects",
    "/projects/sf6-gas-handling-for-underground-substation",
    "/posts",
    "/pages",
    "/posts/authors",
    "/posts/categories",
    "/posts/tags",
  ] as const;

  const now = new Date();

  const staticUrls: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${siteConfig.site_domain}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency:
      path === "/"
        ? "yearly"
        : path.startsWith("/posts")
          ? "weekly"
          : "monthly",
    priority:
      path === "/"
        ? 1
        : path === "/products" || path === "/projects"
          ? 0.9
          : path.startsWith("/products/")
            ? 0.8
            : 0.7,
  }));

  const postUrls: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteConfig.site_domain}/posts/${post.slug}`,
    lastModified: new Date(post.modified),
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  const pageUrls: MetadataRoute.Sitemap = pages.map((page) => ({
    url: `${siteConfig.site_domain}/pages/${page.slug}`,
    lastModified: new Date(page.modified || page.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticUrls, ...postUrls, ...pageUrls];
}
