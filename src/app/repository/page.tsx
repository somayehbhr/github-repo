"use client";

import { GitHubRepository } from "@/types/GithubRepository";
import { RepositoryContainer } from "@/app/repository/containers/RepositoryContainer";

const Repository = (props: { searchParams: { info: string } }) => {
  const repo: GitHubRepository = JSON.parse(props.searchParams.info)?.[0];
  return <RepositoryContainer repo={repo} />;
};

export default Repository;
