import { useMutation } from "@tanstack/react-query";
import { search } from "@/services/search";

export const useSearch = () => {
  const {
    mutateAsync: mutateSearch,
    data: searchResult,
    isPending: searchPending,
  } = useMutation({
    mutationFn: (keyword: string) => {
      return search("repositories", { q: keyword });
    },
  });

  return { mutateSearch, searchResult, searchPending };
};
