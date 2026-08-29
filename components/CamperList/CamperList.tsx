"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import CamperCard from "@/components/CamperCard/CamperCard";
import EmptyState from "@/components/EmptyState/EmptyState";
import Loader from "../Loader/Loader";
import { getCampers } from "@/lib/api/campersApi";
import { campersKeys } from "@/lib/api/queryKeys";
import type { CampersFilterParams } from "@/types/camper";
import styles from "./CamperList.module.css";

const PER_PAGE = 4;

type CamperListProps = {
  filters: CampersFilterParams;
  onClearFilters: () => void;
};

export default function CamperList({ filters, onClearFilters }: CamperListProps) {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      queryKey: campersKeys.list(filters),
      queryFn: ({ pageParam }) =>
        getCampers({ ...filters, page: pageParam, perPage: PER_PAGE }),
      initialPageParam: 1,
      getNextPageParam: (lastPage) =>
        lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined,
    });

  const campers = data?.pages.flatMap((page) => page.campers) ?? [];

  if (!isLoading && campers.length === 0) {
    return <EmptyState onReset={onClearFilters} />;
  }

  return (
    <>
      <ul className={styles.list}>
        {campers.map((camper) => (
          <CamperCard key={camper.id} camper={camper} />
        ))}
      </ul>

      {hasNextPage && (
        <div className={styles.loadMoreWrapper}>
          <button
            type="button"
            className={styles.loadMore}
            onClick={() => fetchNextPage()}
          >
            Load more
          </button>
        </div>
      )}

      <Loader visible={isLoading || isFetchingNextPage} />
    </>
  );
}
