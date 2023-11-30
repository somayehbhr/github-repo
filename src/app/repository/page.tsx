"use client";

import { RepositoryDetail } from "@/components/RepositoryDetail";
import { GitHubRepository } from "@/types/GithubRepository";

const Repository = (props: { searchParams: { info: string } }) => {
  const repo: GitHubRepository = JSON.parse(props.searchParams.info)?.[0];
  return <RepositoryDetail repo={repo} />;
};

export default Repository;
