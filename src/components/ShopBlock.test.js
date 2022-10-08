import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ShopBlock from "./ShopBlock";
import { Beach } from "../assets";
import userEvent from "@testing-library/user-event";

const mockAddToCard = jest.fn();
const item = {
  name: "Sunset on the Beach",
  price: 2.5,
  amount: 8,
  img: Beach,
};

describe("ShopBlock", () => {
  test("should render item name", () => {
    render(<ShopBlock item={item} addToCard={mockAddToCard} />);
    const itemName = screen.getByText(/sunset on the beach/i);
    expect(itemName).toBeInTheDocument();
    expect(itemName.textContent).toBe("Sunset on the Beach");
  });

  test("should render item price", () => {
    render(<ShopBlock item={item} addToCard={mockAddToCard} />);
    const itemPrice = screen.getByText(/price/i);
    expect(itemPrice).toBeInTheDocument();
    expect(itemPrice.textContent).toBe("Price 2.5");
  });

  test("should render items available", () => {
    render(<ShopBlock item={item} addToCard={mockAddToCard} />);
    const itemsAvailable = screen.getByText(/Available/i);
    expect(itemsAvailable).toBeInTheDocument();
    expect(itemsAvailable.textContent).toBe("Available: 8");
  });

  test("should render img", () => {
    render(<ShopBlock item={item} addToCard={mockAddToCard} />);
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
  });

  test("counter should increment number", () => {
    render(<ShopBlock item={item} addToCard={mockAddToCard} />);
    const incrementButton = screen.getByRole("button", { name: "+" });
    const counter = screen.getByTestId("counter");

    userEvent.click(incrementButton);

    expect(counter.textContent).toBe("2");
  });
  test("counter should decrement number", () => {
    render(<ShopBlock item={item} addToCard={mockAddToCard} />);
    const incrementButton = screen.getByRole("button", { name: "+" });
    const decrementButton = screen.getByRole("button", { name: "-" });
    const counter = screen.getByTestId("counter");

    for (let i = 0; i < 5; i++) {
      userEvent.click(incrementButton);
    }
    userEvent.click(decrementButton);

    expect(counter.textContent).toBe("5");
  });
});
