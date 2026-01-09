import React from "react";
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../components/Hero";

// Mock child components
jest.mock("../components/Footer", () => {
  return () => <div data-testid="footer-mock" />;
});
jest.mock("../components/WhatsAppButton", () => {
  return () => <div data-testid="whatsapp-button-mock" />;
});

// Mock framer-motion to simplify testing
jest.mock("framer-motion", () => ({
  AnimatePresence: ({ children }) =>
    <div>
      {children}
    </div>,
  motion: {
    div: ({ children }) =>
      <div>
        {children}
      </div>
  }
}));

describe("Hero Component", () => {
  // Use fake timers to control the setInterval behavior
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test("renders with the main tagline and initial content", () => {
    render(<Hero />);

    // Check for the main tagline
    expect(screen.getByText("From Farm to Globe")).toBeInTheDocument();

    // Check for "What We Do" section title
    expect(screen.getByText("What We Do")).toBeInTheDocument();

    // Check for the mock components
    expect(screen.getByTestId("whatsapp-button-mock")).toBeInTheDocument();
    expect(screen.getByTestId("footer-mock")).toBeInTheDocument();
  });

  test("renders the initial image slide and dot indicator", () => {
    render(<Hero />);

    // The initial image should be the first one
    const initialImage = screen.getByAltText("Slide 1");
    expect(initialImage).toBeInTheDocument();
    expect(initialImage).toHaveAttribute("src", "/HeroImage1.avif");

    // Check that the first dot indicator is active (indicated by its class)
    const activeDot = screen.getByLabelText("Go to slide 1");
    expect(activeDot).toHaveClass("bg-[#F0EAD6]");
  });

  test("automatically cycles through image slides every 3 seconds", () => {
    render(<Hero />);

    // Assert initial state: first image is visible
    expect(screen.getByAltText("Slide 1")).toBeInTheDocument();

    // Advance timers by 3 seconds to trigger the first slide change
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    // Now the second image should be visible
    expect(screen.getByAltText("Slide 2")).toBeInTheDocument();

    // Advance timers by another 3 seconds
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    // Now the third image should be visible
    expect(screen.getByAltText("Slide 3")).toBeInTheDocument();

    // Advance timers again to loop back to the first image
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    // The first image should be visible again
    expect(screen.getByAltText("Slide 1")).toBeInTheDocument();
  });

  test("allows manual navigation using the dot indicators", () => {
    render(<Hero />);

    // Click the second dot indicator
    const secondDot = screen.getByLabelText("Go to slide 2");
    act(() => {
      secondDot.click();
    });

    // The second image should now be visible
    expect(screen.getByAltText("Slide 2")).toBeInTheDocument();

    // The second dot should now be active
    expect(secondDot).toHaveClass("bg-[#F0EAD6]");

    // The first dot should no longer be active
    const firstDot = screen.getByLabelText("Go to slide 1");
    expect(firstDot).toHaveClass("bg-white/50");
  });

  test('renders all content in the "What We Do" section', () => {
    render(<Hero />);

    // Check for key text in the main description
    expect(
      screen.getByText(
        /We specialize in the export of premium-grade green coffee beans/i
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /As merchant exporters, we bridge the gap between trusted growers and discerning buyers worldwide./i
      )
    ).toBeInTheDocument();

    // Check for all four cards and their titles
    expect(screen.getByText("Green Coffee Bean Exports")).toBeInTheDocument();
    expect(screen.getByText("Quality Assurance")).toBeInTheDocument();
    expect(screen.getByText("Efficient Logistics")).toBeInTheDocument();
    expect(screen.getByText("Global Reach")).toBeInTheDocument();
  });
});
