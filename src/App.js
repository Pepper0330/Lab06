import logo from './logo.svg';
import './App.css';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import EngineeringTopics from './EngineeringTopics.js';

function App() {
  var isLoggedIn = false;


  var currentYear = new Date().getFullYear();
  return (
    <div>
      <h1>ENSF-381: Full Stack Web Development</h1>
      <p>React Components</p>
      <p>{currentYear}</p>
      <p>{isLoggedIn ? "Welcome back!" : "Please log in"}</p>
      <Home title="Home Page" desc="Welcome to our website."/>
      <About title="About Us" desc="We are passionate about
delivering quality experiences."/>
      <Contact title="Contact Us" desc="Feel free to reach out to us via
email or phone"/>
      <EngineeringTopics />
    </div>
  );
}

export default App;
