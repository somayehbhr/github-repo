import { FC } from "react";
import { Controller, useForm } from "react-hook-form";

interface SearchFormProps {
  handleSearch: (keyword: string) => void;
}

export const SearchForm: FC<SearchFormProps> = ({ handleSearch }) => {
  const { handleSubmit, control } = useForm({ defaultValues: { keyword: "" } });
  const onSubmit = (data: { keyword: string }) => {
    handleSearch(data?.keyword);
  };

  return (
    <div className="search-bar">
      <form
        data-testid="search-form"
        className="flex items-center justify-between w-[300px] max-w-md mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <input
              type="search"
              {...field}
              placeholder="ex: github-repo"
              className="w-3/4 h-[40px] px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:border-blue-500"
            />
          )}
          name="keyword"
        />
        <button
          type="submit"
          className="w-1/4 bg-blue-500 text-white px-4 py-2 rounded-r focus:outline-none hover:bg-blue-700"
        >
          Search
        </button>
      </form>
    </div>
  );
};
