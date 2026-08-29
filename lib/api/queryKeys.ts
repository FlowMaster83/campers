import type { CampersFilterParams } from "@/types/camper";

export const campersKeys = {
  all: ["campers"] as const,
  lists: () => [...campersKeys.all, "list"] as const,
  list: (params: CampersFilterParams) =>
    [...campersKeys.lists(), params] as const,
  filters: () => [...campersKeys.all, "filters"] as const,
  details: () => [...campersKeys.all, "detail"] as const,
  detail: (camperId: string) => [...campersKeys.details(), camperId] as const,
  reviews: (camperId: string) =>
    [...campersKeys.detail(camperId), "reviews"] as const,
};
