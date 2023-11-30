import { render, screen } from "@testing-library/react";
import { Repositories } from "@/components";

test("renders Repositories component", () => {
  const mockData = {
    items: [
      {
        id: 1,
        name: "Test Repo",
        description: "This is a test repo",
        owner: {
          login: "testuser",
          avatar_url: "https://test.com/avatar.jpg",
          html_url: "https://test.com/testuser",
        },
        updated_at: "2023-11-30T16:18:42Z",
      },
    ],
  };

  render(<Repositories data={mockData} />);

  const repoName = screen.getByRole("link", { name: /Repo name: Test Repo/i });
  expect(repoName).toBeInTheDocument();

  const repoDesc = screen.getByText(/Desc: This is a test repo/i);
  expect(repoDesc).toBeInTheDocument();

  const repoOwner = screen.getByRole("link", { name: /testuser/i });
  expect(repoOwner).toBeInTheDocument();

  const repoUpdate = screen.getByText(/Last Update: 11\/30\/2023/i);
  expect(repoUpdate).toBeInTheDocument();
});
