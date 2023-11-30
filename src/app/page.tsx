"use client";
import { FC } from "react";
import { Repositories, SearchForm } from "@/components";
import { useSearch } from "@/hooks/useSearch";

const Home: FC = () => {
  const { mutateSearch, searchResult, searchPending } = useSearch();
  return (
    <div className="main-cont p-5 bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4">
          Search Repositories From GitHub
        </h2>
        <div className="flex gap-2 items-center justify-center mb-4 flex-wrap">
          <SearchForm
            handleSearch={async (value) => await mutateSearch(value)}
          />
        </div>
      </div>
      <div className="container mx-auto">
        {searchPending ? (
          <div className="text-center">fetching...</div>
        ) : (
          <section className="users-container">
            <div className="flex flex-wrap gap-3 justify-center">
              <Repositories data={searchResult} />
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Home;
