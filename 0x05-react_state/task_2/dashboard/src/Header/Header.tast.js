import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";
import { AppContext } from "../App/AppContext";

describe("Header component", () => {
  it("should render correctly without logout section", () => {
    const wrapper = shallow(
      <Header />,
      {
        context: {
          user: { isLoggedIn: false }
        }
      }
    );
    expect(wrapper.find("#logoutSection").exists()).toBe(false);
  });

  it("should render correctly with logout section", () => {
    const wrapper = shallow(
      <Header />,
      {
        context: {
          user: { isLoggedIn: true, email: "test@example.com" }
        }
      }
    );
    expect(wrapper.find("#logoutSection").exists()).toBe(true);
  });

  it("should call logOut function when logout link is clicked", () => {
    const logOutSpy = jest.fn();
    const wrapper = shallow(
      <Header />,
      {
        context: {
          user: { isLoggedIn: true, email: "test@example.com" },
          logOut: logOutSpy
        }
      }
    );
    wrapper.find("a").simulate("click");
    expect(logOutSpy).toHaveBeenCalled();
  });
});

