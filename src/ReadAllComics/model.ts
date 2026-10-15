import type { JSONObject } from "@paperback/types";

export interface ReadAllComicsMetadata extends JSONObject {
  page?: number;
  collectedIds?: string[];
}
