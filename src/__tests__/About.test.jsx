import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "../components/About";

// Mock child components to isolate the About component
jest.mock("../components/Footer", () =>
  jest.fn(() => <div data-testid="footer-mock" />)
);

jest.mock("../components/WhatsAppButton", () =>
  jest.fn(() => <div data-testid="whatsapp-button-mock" />)
);

// Mock the framer-motion library to prevent animation-related issues
jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children }) =>
      <div>
        {children}
      </div>
  }
}));

// Mock the lucide-react icons
jest.mock("lucide-react", () => ({
  Leaf: () => <svg data-testid="leaf-icon" />,
  Coffee: () => <svg data-testid="coffee-icon" />,
  Globe: () => <svg data-testid="globe-icon" />
}));

describe("About Component", () => {
  test("renders the main sections and titles", () => {
    render(<About />);

    // Check for main headings
    expect(screen.getByText("Our Story 🌿")).toBeInTheDocument();
    expect(screen.getByText("Our Journey")).toBeInTheDocument();
    expect(screen.getByText("Our Heritage")).toBeInTheDocument();
    expect(screen.getByText("Global Vision")).toBeInTheDocument();
  });

  test("renders all three FeatureCard components with correct content", () => {
    render(<About />);

    // Check for the titles of the FeatureCards
    expect(screen.getByText("Sustainable Sourcing")).toBeInTheDocument();
    expect(screen.getByText("Exceptional Quality")).toBeInTheDocument();
    expect(screen.getByText("Global Expansion")).toBeInTheDocument();

    // Check for the descriptions
    expect(
      screen.getByText(
        "We partner directly with farmers to ensure ethical practices, fair trade relationships, and eco-friendly farming."
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "From farm to your cup, the beans are handpicked, expertly harvested, and processed to the highest standards for a premium product each time."
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Expanding our legacy to Australia, New Zealand, and the GCC region with a commitment to premium exports."
      )
    ).toBeInTheDocument();
  });

  test("renders the main image and text in the journey section", () => {
    render(<About />);

    // Check for the image with its alt text
    const journeyImage = screen.getByAltText("Coffee plantation");
    expect(journeyImage).toBeInTheDocument();
    expect(journeyImage).toHaveAttribute(
      "src",
      "https://5.imimg.com/data5/SELLER/Default/2024/9/452965436/DE/NM/HW/197384915/arabica-green-coffee-beans.jpg"
    );

    // Check for key text within the journey section
    expect(
      screen.getByText(/At Georges Imports and Exports Pvt Ltd/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Our tagline, “Farm to Globe,” reflects this journey./i)
    ).toBeInTheDocument();
  });

  test("renders the Footer and WhatsAppButton components", () => {
    render(<About />);

    // Check for the mocked components using their test IDs
    expect(screen.getByTestId("footer-mock")).toBeInTheDocument();
    expect(screen.getByTestId("whatsapp-button-mock")).toBeInTheDocument();
  });
});
