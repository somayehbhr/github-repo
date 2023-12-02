import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { SearchForm } from "@/components/SearchForm";

describe("SearchForm", () => {
  it("should render the form", () => {
    const handleSearch = jest.fn();
    render(<SearchForm handleSearch={handleSearch} />);
    const inputElement = screen.getByPlaceholderText(/ex: github-repo/i);
    expect(inputElement).toBeInTheDocument();
  });

  it("should call handleSearch on form submission", async () => {
    const handleSearch = jest.fn();
    render(<SearchForm handleSearch={handleSearch} />);
    const inputElement = screen.getByPlaceholderText(/ex: github-repo/i);
    fireEvent.change(inputElement, { target: { value: "test" } });

    const formElement = screen.getByTestId("search-form");
    fireEvent.submit(formElement);

    await waitFor(() => expect(handleSearch).toHaveBeenCalledWith("test"));
  });
});
