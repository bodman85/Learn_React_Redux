import { fireEvent, render, screen } from "@testing-library/react";
import { Calculator } from "components/Calculator/Calculator";

describe("<Calculator/>", () => {
  beforeEach(() => {
    //render(<Calculator />);
  });

  const { getValueA, getValueB, getOperator, getResult } = getCalculator();

  it("has 'Calculator' displayed somewhere", () => {
    render(<Calculator />);
    //screen.debug();
    const textElement = screen.getByText("Calculator");
    expect(textElement.textContent).toBe("Calculator");
  });

  it("has an h1 that contains 'Calculator' ", () => {
    render(<Calculator />);
    const titleElement = screen.getByRole("heading", { level: 1 });
    expect(titleElement.textContent).toBe("Calculator");
  });

  it("performs 0 + 0 by default ", () => {
    render(<Calculator />);
    expect(getValueA()).toBe("0");
    expect(getValueB()).toBe("0");
    expect(getOperator()).toBe("+");
    expect(getResult()).toBe("0");
  });

  it("uses default values correctly ", () => {
    render(<Calculator defaultA={12} defaultB={"10"} defaultOperator={"*"} />);
    expect(getValueA()).toBe("12");
    expect(getValueB()).toBe("10");
    expect(getOperator()).toBe("*");
    expect(getResult()).toBe("120");
  });

  it("calculates correctly when the user updates an input", () => {
    render(<Calculator defaultA={12} defaultB={"10"} defaultOperator={"*"} />);
    fireEvent.change(screen.getByTestId("inputA"), { target: { value: "3" } });
    expect(getResult()).toBe("30");
    fireEvent.change(screen.getByTestId("inputB"), { target: { value: "3" } });
    expect(getResult()).toBe("9");
    fireEvent.change(screen.getByTestId("operator"), {
      target: { value: "-" },
    });
    expect(getResult()).toBe("0");
  });

  it("displays an error when we divide by 0", () => {
    render(<Calculator defaultA={1} defaultB={"0"} defaultOperator={"/"} />);
    expect(getResult()).toBe("You can't divide by 0!");
  });

  it("Display a message when no operator is provided", () => {
    render(<Calculator defaultA={1} defaultB={"0"} defaultOperator={"/"} />);
    fireEvent.change(screen.getByTestId("operator"), {
      target: { value: "!" },
    });
    expect(getResult()).toBe("No operator provided");
  });

  it("Returns 0 when inputs are empty", () => {
    render(<Calculator defaultA={1} defaultB={"0"} defaultOperator={"*"} />);
    fireEvent.change(screen.getByTestId("inputA"), {
      target: { value: "" },
    });
    fireEvent.change(screen.getByTestId("inputB"), {
      target: { value: "" },
    });
    expect(getResult()).toBe("0");
  });
});

function getCalculator() {
  return {
    getValueA: () => screen.getByTestId("inputA").value,
    getValueB: () => screen.getByTestId("inputB").value,
    getOperator: () => screen.getByTestId("operator").value,
    getResult: () => screen.getByTestId("result").textContent,
  };
}
