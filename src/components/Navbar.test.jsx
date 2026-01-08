import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";

test("muestra el título de la aplicación", () => {
    render(<Navbar setView={() => { }} />);
    expect(screen.getByText(/EmpleoApp/i)).toBeInTheDocument();
});

test("navega a publicar empleo", () => {
    const setView = vi.fn();
    render(<Navbar setView={setView} />);

    fireEvent.click(screen.getByText(/Publicar empleo/i));
    expect(setView).toHaveBeenCalledWith("post");
});
