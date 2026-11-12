import type { MetadataRoute } from "next";
import { SITE } from "@/content/types";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${SITE}/` }];
}
