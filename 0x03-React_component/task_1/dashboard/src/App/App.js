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
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
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

App.defaultProps = {
  logOut: () => {}, // Default value for logOut prop
};

export default App;
