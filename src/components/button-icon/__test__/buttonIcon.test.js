import React from "react";
import { render, screen } from "@testing-library/react";
import ButtonIcon from "../buttonIcon";

test("renders the image specified by iconUrl", () => {
  const testIconUrl = "test.png";
  render(<ButtonIcon iconUrl={testIconUrl} />);
  const imgElement = screen.queryByTitle("button-icon");
  expect(imgElement).toBeInTheDocument();
  expect(imgElement).toHaveAttribute("src", testIconUrl);
});
