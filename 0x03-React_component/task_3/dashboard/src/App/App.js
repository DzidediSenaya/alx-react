import React from 'react';
import './App.css';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';

function App() {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        <BodySectionWithMarginBottom title="Course list">
          <CourseList />
        </BodySectionWithMarginBottom>
        <BodySectionWithMarginBottom title="Log in to continue">
          <Login />
        </BodySectionWithMarginBottom>
        <BodySection title="News from the School">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis lorem eget nisi porta, sed posuere elit sodales.</p>
        </BodySection>
        <Footer />
      </div>
    </>
  );
}

export default App;

