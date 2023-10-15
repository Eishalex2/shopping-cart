import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import Root from "../src/root/root";
import Index from "../src/index";
import Shop from "../src/shop/shop";
import Cart from "../src/cart/cart";

const data = [
  {
    id: 1,
    title: "Stuff",
    price: 100,
    description: "My stuff",
    category: "bags",
    image: "image link",
    quantity: 1,
    rating: {
      rate: 1,
      count: 110
    }
  },
  {
    id: 2,
    title: "Item 2",
    price: 10,
    description: "My item 2",
    category: "shoes",
    image: "image link 2",
    quantity: 5,
    rating: {
      rate: 2,
      count: 3
    }
  }
];

describe("Root component", () => {
  it("renders nav bar", () => {
    const { container } = render(<Root />, {wrapper: BrowserRouter});
    expect(container).toMatchSnapshot();
  });
});

describe("Index component", () => {
  it("renders homepage text", () => {
    render(<Index />, {wrapper: BrowserRouter});

    expect(screen.getByText("Adventure is out there...")).toBeInTheDocument();
    expect(screen.getByRole("button").textContent).toMatch(/shop now/i);
  });
});

describe("Shop component", () => {
  it("renders product", () => {
    render(<Shop data={data}/>, {wrapper: BrowserRouter});

    expect(screen.getByText("Stuff")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });
});

describe("Cart page", () => {
  it("renders cart", () => {
    render(<Cart items={data}/>, {wrapper: BrowserRouter});

    expect(screen.getByText("Stuff")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });
});