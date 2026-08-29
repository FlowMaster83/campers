"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import CamperCard from "@/components/CamperCard/CamperCard";
import Loader from "../Loader/Loader";
import { getCampers } from "@/lib/api/campersApi";
import { campersKeys } from "@/lib/api/queryKeys";
import styles from "./CamperList.module.css";

const PER_PAGE = 4;

export default function CamperList() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      queryKey: campersKeys.list({}),
      queryFn: ({ pageParam }) => getCampers({ page: pageParam, perPage: PER_PAGE }),
      initialPageParam: 1,
      getNextPageParam: (lastPage) =>
        lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined,
    });

  const campers = data?.pages.flatMap((page) => page.campers) ?? [];

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
