import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";

describe("<Login />", () => {
  it("renders without crashing", () => {
    shallow(<Login />);
  });

  it("submit button is disabled by default", () => {
    const wrapper = shallow(<Login />);
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop("disabled")).toBeTruthy();
  });

  it("submit button is enabled after changing input values", () => {
    const wrapper = shallow(<Login />);
    wrapper.find('input[type="email"]').simulate("change", { target: { value: "test@example.com" } });
    wrapper.find('input[type="password"]').simulate("change", { target: { value: "password" } });
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop("disabled")).toBeFalsy();
  });
});

