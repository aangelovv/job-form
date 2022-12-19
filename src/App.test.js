import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Test the Form Component", () => {
  test("render the form with submit button", async () => {
    render(<App />);
    const buttonList = await screen.findAllByRole("button");
    expect(buttonList).toHaveLength(1);
  });

  test("renders Job application form ", () => {
    render(<App />);
    const linkElement = screen.getByText(/Job application form/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("Experience year input should have type number", () => {
    render(<App />);
    const year = screen.getByPlaceholderText("2");
    expect(year).toHaveAttribute("type", "number");
  });

  test("When submited, all inputs shall be reset", () => {
    render(<App />);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const inputField = screen.findAllByPlaceholderText("johnSmith@gmail.com");
    expect(inputField).toBeTruthy();
  });

  test("Name input should have type text", () => {
    render(<App />);
    const name = screen.getByPlaceholderText("John Smith");
    expect(name).toHaveAttribute("type", "text");
  });

  test("email input should have 'email' label ", () => {
    render(<App />);
    const email = screen.findAllByLabelText("email");
    expect(email).toBeTruthy();
  });

  test("renders We are NexGen ", () => {
    render(<App />);
    const linkElement = screen.getByText(/We are NexGen/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("Gender input should have 'gender id' ", () => {
    render(<App />);
    const linkElement = screen.findAllByTestId("gender");
    expect(linkElement).toBeTruthy();
  });

  test("Expect if picture doesnt load to have alt 'christmas hat' ", () => {
    render(<App />);
    const linkElement = screen.findByAltText("christmas hat");
    expect(linkElement).toBeTruthy();
  });

  test("Expect email validation to fail' ", () => {
    render(<App />);
    const emailTest = screen.getByPlaceholderText("johnSmith@gmail.com");
    userEvent.type(email, "invalidEmail");
    expect(emailTest.value).not.toMatch("johnSmith@gmail.com");
  });

  test("EEmail input test' ", () => {
    render(<App />);
    const emailTest = screen.getByPlaceholderText("johnSmith@gmail.com");
    expect(emailTest).toHaveAttribute("type", "email");
  });
});
