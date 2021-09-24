import React from "react";
import { render, screen, cleanup, waitFor } from "@testing-library/react";

import "intersection-observer";
import CircularProgressBar from "../components/CircularProgressBar";

describe("CircularProgressBar", function () {
  afterAll(() => cleanup);

  test('checking if it exists `data-angel="20"`', async () => {
    const { container } = render(<CircularProgressBar percent={20} />);

    await waitFor(() => {
      expect(container.querySelector('[data-angel="20"]')).toBeTruthy();
    });
  });

  test("checking if it exists gradient", () => {
    const props = {
      percent: 60,
      linearGradient: ["#ff0000", "#9c27b0"]
    };

    const { container } = render(<CircularProgressBar {...props} />);

    props.linearGradient.forEach((stop) => {
      expect(container.querySelector(`[stop-color="${stop}"]`)).toBeTruthy();
    });
  });

  test("checking if it exists `animationOff`", async () => {
    const props = {
      percent: 80,
      animationOff: true
    };

    const { rerender, container } = render(
      <CircularProgressBar percent={60} />
    );

    expect(container.querySelector('[data-angel="60"]')).toBeFalsy();

    rerender(<CircularProgressBar {...props} />);

    await waitFor(() => {
      expect(container.querySelector('[data-angel="80"]')).toBeTruthy();
    });
  });

  test("checking if it exists image in center of circle", () => {
    const { container } = render(
      <CircularProgressBar percent={60}>
        <img
          src="https://picsum.photos/100/100"
          style={{
            width: "60px",
            borderRadius: "50%",
            marginTop: "-40px",
            padding: "2px",
            border: "3px solid salmon"
          }}
          alt="Random"
        />
      </CircularProgressBar>
    );

    const image = container.querySelector("div > img");
    expect(image).toBeTruthy();
  });

  test("checking if it the percentage change works", async () => {
    const { rerender, container } = render(
      <CircularProgressBar percent={60} />
    );

    await waitFor(
      () => {
        expect(container.querySelector(`[data-angel="60"]`)).toBeTruthy();
      },
      { timeout: 3000 }
    );

    rerender(<CircularProgressBar percent={30} />);

    await waitFor(
      () => {
        expect(container.querySelector(`[data-angel="30"]`)).toBeTruthy();
      },
      { timeout: 4000 }
    );
  });

  test("checking if it exists `<text ...` svg element", () => {
    const props = {
      percent: 20,
      number: false
    };

    const { container } = render(<CircularProgressBar {...props} />);
    expect(container.querySelector("text")).toBeFalsy();
  });

  test('checking if it exists `stroke-linecap="round"`', () => {
    const props = {
      percent: 60,
      strokeLinecap: "butt"
    };

    const { container } = render(<CircularProgressBar {...props} />);
    expect(container.querySelector("[stroke-linecap='butt']")).toBeTruthy();
  });

  test('checking if it exists `stroke-dasharray="10, 1"`', () => {
    const props = {
      percent: 70,
      strokeDasharray: "10, 1"
    };

    const { container } = render(<CircularProgressBar {...props} />);
    expect(container.querySelector("[stroke-dasharray='10, 1']")).toBeTruthy();
  });
});
