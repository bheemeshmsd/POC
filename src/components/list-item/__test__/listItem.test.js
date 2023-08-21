import ListItem from "../listItem";
import React from "react";
import { render, fireEvent, screen ,waitFor } from "@testing-library/react";

import { Provider } from "react-redux";
import store from "../../../redux/store.js";

const MockElement = () => {
  return (
    <Provider store={store}>
      <ListItem
        content={{ value: "Test1", checked: false }}
        index={1}
        toDoIndex={1}
      />
    </Provider>
  );
};

describe("List Item", function () {
  it("should render List Container", async () => {
    render(<MockElement />);
    const inputElement = screen.getByTitle("list-container");
    expect(inputElement).toBeInTheDocument();
  });

  it("check box get's marked when been click", async () => {
    render(<MockElement />);
    const checkBoxElement = screen.getByTitle("checkbox");
    expect(checkBoxElement.checked).toBe(false);
    fireEvent.click(checkBoxElement);
    expect(checkBoxElement.checked).toBe(true);
  });

  it("should be able to display the value", async () => {
    render(<MockElement />);
    const textElement = screen.getByText(/Test1/i);
    expect(textElement).toBeInTheDocument();
  });

  it("should be able to apply dynamic css on checkbox value been filled", async () => {
    render(<MockElement />);
    const checkBoxElement = screen.getByTitle("checkbox");
    let textElement = screen.getByTitle("listValue");
    expect(checkBoxElement.checked).toBe(false);
    expect(textElement).not.toHaveClass("strike");
    fireEvent.click(checkBoxElement);
    expect(checkBoxElement.checked).toBe(true);
    // expect(textElement).toHaveClass("strike");
  });

});
