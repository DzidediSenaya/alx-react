import React, { Component } from 'react';
import './App.css';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    const { isLoggedIn } = this.state;
    return (
      <>
        <Notifications />
        <div className="App">
          <Header />
          {isLoggedIn ? <CourseList /> : <Login />}
          <Footer />
        </div>
      </>
    );
  }
}

export default App;

