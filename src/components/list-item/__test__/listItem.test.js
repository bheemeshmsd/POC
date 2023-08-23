import ListItem from "../listItem";
import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";

import { Provider } from "react-redux";
import store from "../../../redux/store.js";

const MockElement = () => {
  return (
    <Provider store={store}>
      <ListItem
        content={{ value: "Test1", checkBox: false }}
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
    const checkBoxElement = screen.getByTitle("checkBox");
    expect(checkBoxElement.checked).toBe(false);
    fireEvent.click(checkBoxElement, {
      target: { checked: true },
    });
    expect(checkBoxElement.checked).toBe(true);
  });

  it("should be able to display the value", async () => {
    render(<MockElement />);
    const textElement = screen.getByText(/Test1/i);
    expect(textElement).toBeInTheDocument();
  });

  it("should be able to apply dynamic css on checkBox value been filled", async () => {
    render(<MockElement />);
    let checkBoxElement = screen.getByTitle("checkBox");
    let textElement = screen.getByTitle("listValue");
    expect(checkBoxElement.checked).toBe(false);
    expect(textElement).not.toHaveClass("strike");
    fireEvent.click(checkBoxElement);
    checkBoxElement = screen.getByTitle("checkBox");
    expect(checkBoxElement.checked).toBe(true);
    textElement = screen.getByTitle("listValue");
    expect(textElement).toHaveClass("strike");
  });
});
