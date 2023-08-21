import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TitleContainer from "../titleContainer";
import { Provider } from "react-redux";
import store from "../../../redux/store.js";

const MockElement = () => {
  return (
    <Provider store={store}>
      <TitleContainer />
    </Provider>
  );
};

describe("Title Container", function () {
  it("should render input element", async () => {
    render(<MockElement />);
    const inputElement = screen.getByPlaceholderText(/Enter a title.../i);
    expect(inputElement).toBeInTheDocument();
  });

  it("should be able to type into the input", async () => {
    render(<MockElement />);
    const inputElement = screen.getByPlaceholderText(/Enter a title.../i);
    fireEvent.change(inputElement, { target: { value: "Go go Pikachu!!!" } });
    expect(inputElement.value).toBe("Go go Pikachu!!!");
  });

  it("should be able to submit the value on pressing Enter", async () => {
    render(<MockElement />);
    const inputElement = screen.getByPlaceholderText(/Enter a title.../i);
    fireEvent.change(inputElement, { target: { value: "Go go Pikachu!!!" } });
    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });
    expect(inputElement).toHaveValue("");
  });

  it("should'nt be able to submit the value on pressing Enter", async () => {
    render(<MockElement />);
    const inputElement = screen.getByPlaceholderText(/Enter a title.../i);
    fireEvent.change(inputElement, { target: { value: "Go go Pikachu!!!" } });
    fireEvent.keyDown(inputElement, { key: "Escape", code: "Escape" });
    expect(inputElement).not.toHaveValue("");
  });
});
