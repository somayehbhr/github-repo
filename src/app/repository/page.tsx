"use client";

import { RepositoryContainer } from "@/app/repository/containers/RepositoryContainer";

const Repository = (props: { searchParams: { info: string } }) => {
  const repo: string = JSON.parse(props.searchParams.info);
  return <RepositoryContainer repo={repo} />;
};

export default Repository;
