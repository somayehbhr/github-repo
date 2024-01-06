import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getRepoDetail } from "@/services/search";

export const useRepositoryDetail = ({ repo }: { repo: string }) => {
  const { data: repoDetail, isLoading: isLoadingRepoDetail } = useQuery({
    queryFn: () => getRepoDetail(repo),
    queryKey: [repo],
    enabled: !!repo,
  });

  const { data: contributors, isLoading: isLoadingContributors } = useQuery({
    queryFn: () => (repoDetail ? axios.get(repoDetail.contributors_url) : null),
    queryKey: [repoDetail?.contributors_url],
    enabled: !!repoDetail,
  });

  const { data: languages, isLoading: isLoadingLanguages } = useQuery({
    queryFn: () => (repoDetail ? axios.get(repoDetail.languages_url) : null),
    queryKey: [repoDetail?.languages_url],
    enabled: !!repoDetail,
  });

  return {
    repoDetail,
    isLoadingRepoDetail,
    contributors,
    isLoadingContributors,
    languages,
    isLoadingLanguages,
  };
};
