import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";

// Test to check if the form shows the entered name and email
test("the page shows information the user types into the name and email address form fields", () => {
  render(<App />);

  const nameInput = screen.getByPlaceholderText("Name");
  const emailInput = screen.getByPlaceholderText("Email");
  const submitButton = screen.getByText("Submit");

  fireEvent.change(nameInput, { target: { value: "John Doe" } });
  fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } });
  fireEvent.click(submitButton);

  const message = screen.getByText(/Name: John Doe/);
  expect(message).toBeInTheDocument();
  expect(message).toHaveTextContent("Email: john.doe@example.com");
  expect(message).toHaveTextContent("No interests selected");
});

// Test to check if the message is displayed correctly upon submission
test("a message is displayed when the user clicks the Submit button", () => {
  render(<App />);

  const nameInput = screen.getByPlaceholderText("Name");
  const emailInput = screen.getByPlaceholderText("Email");
  const interest1Checkbox = screen.getByLabelText("Technology");
  const interest3Checkbox = screen.getByLabelText("Travel");
  const submitButton = screen.getByText("Submit");

  fireEvent.change(nameInput, { target: { value: "Jane Doe" } });
  fireEvent.change(emailInput, { target: { value: "jane.doe@example.com" } });
  fireEvent.click(interest1Checkbox);
  fireEvent.click(interest3Checkbox);
  fireEvent.click(submitButton);

  const message = screen.getByText(/Name: Jane Doe/);
  expect(message).toBeInTheDocument();
  expect(message).toHaveTextContent("Email: jane.doe@example.com");
  expect(message).toHaveTextContent("Interests: Technology, Travel");
});
