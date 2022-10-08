import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Layout from "./Layout";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

const MockLayout = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

describe("Layout", () => {
  test("should add to card", () => {
    render(<MockLayout />);
    const shopLink = screen.getByText("Shop", { exact: true });
    userEvent.click(shopLink);
    const shopButton = screen.getAllByRole("button", { name: "Add to cart" });
    userEvent.click(shopButton[0]);
    const cartCounter = screen.getByTestId("cart");
    expect(cartCounter.textContent).toBe("checkout.svg1");
  });

  test("should delete from card", () => {
    render(<MockLayout />);
    const shopLink = screen.getAllByText("Shop");
    userEvent.click(shopLink[0]);
    const shopButton = screen.getAllByRole("button", { name: "Add to cart" });
    userEvent.click(shopButton[0]);
    const cartCounter = screen.getByTestId("cart");
    userEvent.click(cartCounter);
    const deleteItem = screen.getByRole("button", { name: "X" });
    userEvent.click(deleteItem);
    expect(cartCounter.textContent).toBe("checkout.svg0");
  });
});
