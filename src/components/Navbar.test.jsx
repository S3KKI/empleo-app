import { render, screen } from "@testing-library/react";

test("test básico", () => {
  render(<h1>Hola</h1>);
  expect(screen.getByText("Hola")).toBeInTheDocument();
});
