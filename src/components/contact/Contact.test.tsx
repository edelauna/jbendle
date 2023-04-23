import { render, screen, fireEvent } from "@testing-library/react";
import { Contact } from "./Contact";

const mockEmailTo = "test@example.com";

describe("Contact", () => {
  it("should render the form elements and submit a message", () => {
    render(<Contact emailTo={mockEmailTo} />);

    expect(screen.getByRole("textbox", {name: "Name"})).toBeInTheDocument();
    expect(screen.getByRole("textbox", {name: "Message"})).toBeInTheDocument();
    expect(screen.getByRole("button").textContent).toBe("Send");

    const nameInput = screen.getByRole("textbox", {name: "Name"});
    const messageInput = screen.getByRole("textbox", {name: "Message"});
    const submitButton = screen.getByRole("button");

    fireEvent.change(nameInput, { target: { value: "Test User" } });
    fireEvent.change(messageInput, {

      target: { value: "This is a test message" },
    });
    fireEvent.click(submitButton);

    expect(screen.getByText("Sending message!")).toBeInTheDocument();
  });
});
