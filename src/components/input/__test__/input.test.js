import React from "react";
import { shallow } from "enzyme";
import Input from "../input";

describe("Input component", () => {
  let wrapper;
  let mockHandleChange;

  beforeEach(() => {
    mockHandleChange = jest.fn();

    const mockProps = {
      label: "email",
      value: "test@gmail.com",
      handleChange: mockHandleChange,
    };

    wrapper = shallow(<Input {...mockProps} />);
  });

  it("should render Input component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call handleChange method when input changes", () => {
    wrapper.find("InputContainer").simulate("change");

    expect(mockHandleChange).toHaveBeenCalled();
  });

  it("should render LabelContainer if there is a label", () => {
    expect(wrapper.exists("LabelContainer")).toBe(true);
  });

  it("should not render LabelContainer if there is no label", () => {
    const mockNewProps = {
      label: "",
      value: "test@gmail.com",
      handleChange: mockHandleChange,
    };

    const newWrapper = shallow(<Input {...mockNewProps} />);

    expect(newWrapper.exists("LabelContainer")).toBe(false);
  });
});
