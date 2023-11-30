import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { GitHubRepository } from "@/types/GithubRepository";

export const useRepositoryDetail = ({ repo }: { repo: GitHubRepository }) => {
  const { data: contributors, isLoading: isLoadingContributors } = useQuery({
    queryFn: () => axios.get(repo.contributors_url),
    queryKey: [repo.contributors_url],
    enabled: !!repo.contributors_url,
  });

  const { data: languages, isLoading: isLoadingLanguages } = useQuery({
    queryFn: () => axios.get(repo.languages_url),
    queryKey: [repo.languages_url],
    enabled: !!repo.languages_url,
  });

  return { contributors, isLoadingContributors, languages, isLoadingLanguages };
};
