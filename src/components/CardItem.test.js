import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardItem from "./CardItem";
import { Beach } from "../assets";

const mockRemoveFromCard = jest.fn();
const obj = {
  name: "Sunset on the Beach",
  price: 2.5,
  amount: 2,
  img: Beach,
};

describe("CardItem", () => {
  test("should render item name", () => {
    render(<CardItem obj={obj} removeFromCard={mockRemoveFromCard} />);
    const itemName = screen.getByText(/sunset on the beach/i);
    expect(itemName).toBeInTheDocument();
    expect(itemName.textContent).toBe("Sunset on the Beach");
  });
  test("should render item price", () => {
    render(<CardItem obj={obj} removeFromCard={mockRemoveFromCard} />);
    const itemPrice = screen.getByText(/price/i);
    expect(itemPrice).toBeInTheDocument();
    expect(itemPrice.textContent).toBe("Item price: 2.5");
  });

  test("should render items available", () => {
    render(<CardItem obj={obj} removeFromCard={mockRemoveFromCard} />);
    const itemsAmount = screen.getByText(/Amount/i);
    expect(itemsAmount).toBeInTheDocument();
    expect(itemsAmount.textContent).toBe("Amount: 2");
  });

  test("should render img", () => {
    render(<CardItem obj={obj} removeFromCard={mockRemoveFromCard} />);
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
  });

  test("should render total price", () => {
    render(<CardItem obj={obj} removeFromCard={mockRemoveFromCard} />);
    const totalPrice = screen.getByText(/Total/);
    expect(totalPrice.textContent).toBe("Total: 5.00");
  });
});
