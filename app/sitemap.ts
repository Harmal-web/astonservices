import type { MetadataRoute } from "next";
import { securityServices, cleaningServices } from "@/lib/data";

const baseUrl = "https://astonservices.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/security",
    "/cleaning",
    "/about",
    "/areas",
    "/contact",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const securityPages = securityServices.map((s) => ({
    url: `${baseUrl}/security/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const cleaningPages = cleaningServices.map((s) => ({
    url: `${baseUrl}/cleaning/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...securityPages, ...cleaningPages];
}
