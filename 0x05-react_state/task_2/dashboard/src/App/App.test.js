import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { AppContext } from "./AppContext";

describe("App component", () => {
  it("should render correctly with isLoggedIn false", () => {
    const wrapper = shallow(
      <App />,
      {
        context: {
          user: { isLoggedIn: false }
        }
      }
    );
    expect(wrapper.find("Login").exists()).toBe(true);
    expect(wrapper.find("CourseList").exists()).toBe(false);
  });

  it("should render correctly with isLoggedIn true", () => {
    const wrapper = shallow(
      <App />,
      {
        context: {
          user: { isLoggedIn: true }
        }
      }
    );
    expect(wrapper.find("Login").exists()).toBe(false);
    expect(wrapper.find("CourseList").exists()).toBe(true);
  });

  it("should update state correctly when logIn function is called", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().context.logIn("test@example.com", "password");
    expect(wrapper.instance().state.user.isLoggedIn).toBe(true);
    expect(wrapper.instance().state.user.email).toBe("test@example.com");
    expect(wrapper.instance().state.user.password).toBe("password");
  });

  it("should update state correctly when logOut function is called", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().context.logOut();
    expect(wrapper.instance().state.user.isLoggedIn).toBe(false);
    expect(wrapper.instance().state.user.email).toBe("");
    expect(wrapper.instance().state.user.password).toBe("");
  });
});

