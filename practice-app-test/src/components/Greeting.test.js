import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
test("render Hello World as a text", () => {
  //Arrange
  render(<Greeting />);

  //Act
  //...noting

  //Assert
  const helloWorldElement = screen.getByText("Hello World", { exact: false });
  expect(helloWorldElement).toBeInTheDocument();
});