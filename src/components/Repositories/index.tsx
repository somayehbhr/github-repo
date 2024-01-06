import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";

interface Owner {
  login: string;
  avatar_url: string;
  html_url: string;
}

interface Item {
  id: number;
  name: string;
  description: string;
  owner: Owner;
  updated_at: string;
  full_name: string;
}

export interface RepositoriesProps {
  data: {
    items: Item[];
  };
}

export const Repositories: FC<RepositoriesProps> = ({ data }) => {
  return (
    <>
      {data?.items?.map((item) => (
        <div className="col-12 mb-4" key={item?.id}>
          <div className="w-[400px] h-fit single-block bg-white p-4 rounded-lg shadow-md">
            <p className="left repo-desc">
              <Link
                className="text-blue-500 hover:underline"
                href={{
                  pathname: "/repository",
                  query: {
                    info: JSON.stringify(
                      data?.items?.find((repo) => repo.id === item.id)
                        ?.full_name,
                    ),
                  },
                }}
              >
                Repo name: {item?.name}
              </Link>
              <br />
              Desc: {item?.description}
              <br />
              By: {item?.owner?.login ?? ""}
              <br />
              Last Update: {new Date(item?.updated_at).toLocaleDateString()}
            </p>
            <div className="flex gap-4 align-middle mt-3">
              <Image
                height={40}
                width={40}
                className="rounded-full border"
                src={item?.owner?.avatar_url}
                alt={`${item?.owner?.login}`}
              />
              <Link
                href={item?.owner?.html_url}
                className="text-md self-center font-semibold"
              >
                {item?.owner?.login}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
