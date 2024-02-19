import React from "react";
import { CourseList, Login } from "../index";
import { AppProvider } from "./AppContext";

class App extends React.Component {
  render() {
    return (
      <AppProvider>
        {this.context.user.isLoggedIn ? (
          <CourseList />
        ) : (
          <Login logIn={this.context.logIn} />
        )}
      </AppProvider>
    );
  }
}

App.contextType = AppContext;

export default App;

