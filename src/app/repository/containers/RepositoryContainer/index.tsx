import { useRepositoryDetail } from "@/app/repository/hooks/useRepositoryDetail";
import { formatNotationNumber } from "@/utils/formatNotationNumber";
import Link from "next/link";
import Image from "next/image";

export const RepositoryContainer = ({ repo }: { repo: string }) => {
  const {
    repoDetail,
    contributors,
    languages,
    isLoadingLanguages,
    isLoadingRepoDetail,
    isLoadingContributors,
  } = useRepositoryDetail({ repo });

  return (
    <div className="flex flex-wrap main-cont bg-gray-100 min-h-screen p-5 ">
      {isLoadingRepoDetail ? (
        <p className="text-center">fetching...</p>
      ) : (
        <>
          <div className="w-full p-3 sm:w-3/4 ">
            <div>
              <div className="flex justify-start align-middle gap-6 mb-10">
                <Link
                  href={`${repoDetail?.html_url}`}
                  className="text-3xl font-bold inline-block"
                >
                  {repoDetail?.owner.login}
                </Link>
                <span className="border py-2 px-3 rounded-lg ">
                  {repoDetail?.visibility}
                </span>
              </div>
              <div className="flex gap-3 mb-6">
                <h2 className="font-bold text-lg">About: </h2>
                <div>{repoDetail?.description}</div>
              </div>
              <div className="mb-5 flex flex-wrap gap-3">
                {repoDetail?.topics.map((item: string) => (
                  <span
                    className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mb-10">
                {isLoadingContributors ? (
                  <p className="text-center">fetching...</p>
                ) : (
                  <div>
                    <p className="text-lg font-bold mb-3">Contributors: </p>
                    <div className="flex gap-3 flex-wrap w-full">
                      {contributors?.data?.map(
                        (item: {
                          html_url: string;
                          id: number;
                          login: string;
                          avatar_url: string;
                        }) => (
                          <Link
                            href={item.html_url}
                            className="flex bg-white shadow-sm p-2 rounded-md justify-between align-middle gap-2 w-fit h-fit"
                            key={item.id}
                          >
                            <span className="self-center hidden sm:inline-block">
                              {item?.login}
                            </span>

                            <Image
                              height={40}
                              width={40}
                              loader={({ src }) => src}
                              className="rounded-full self-center border"
                              src={item?.avatar_url}
                              alt={`${item?.login}`}
                            />
                          </Link>
                        ),
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="my-3">
                {isLoadingLanguages ? (
                  <p className="text-center">fetching...</p>
                ) : (
                  <div>
                    <p className="text-lg font-bold mb-3">Languages: </p>
                    {Object.keys(languages?.data ?? {}).map((item, index) => (
                      <span
                        className="g-gray-100 w-fit text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 overflow-hidden"
                        key={index}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="w-full px-5 sm:w-1/4">
            <div>
              <span className="font-bold"> Last Updated At: </span>
              <span>
                {new Date(repoDetail?.updated_at).toLocaleDateString()}
              </span>
            </div>
            <div>
              <span className="font-bold">Created At: </span>
              <span>
                {new Date(repoDetail?.created_at).toLocaleDateString()}
              </span>
            </div>
            <div>
              <span className="font-bold">Forks: </span>
              <span>{formatNotationNumber(repoDetail?.forks_count)}</span>
            </div>
            <div>
              <span className="font-bold">Stars: </span>
              <span>{formatNotationNumber(repoDetail?.stargazers_count)}</span>
            </div>
            <div>
              <span className="font-bold">Open issues: </span>
              <span>{formatNotationNumber(repoDetail?.open_issues_count)}</span>
            </div>
            <div>
              <span className="font-bold">Watching: </span>
              <span>{formatNotationNumber(repoDetail?.watchers_count)}</span>
            </div>
            <div className="my-3">
              <p className="text-lg font-bold mb-3">Licenses: </p>

              <div className="flex flex-wrap gap-3">
                <span className="g-gray-100 w-fit text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 overflow-hidden">
                  {repoDetail?.license?.name}
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
