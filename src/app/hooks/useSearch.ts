import { useMutation } from "@tanstack/react-query";
import { search } from "@/services/search";

export const useSearch = () => {
  const {
    mutateAsync: mutateSearch,
    data: searchResult,
    isPending: searchPending,
  } = useMutation({
    mutationFn: async (keyword: string) => {
      return await search("repositories", { query: keyword });
    },
  });

  return { mutateSearch, searchResult, searchPending };
};
