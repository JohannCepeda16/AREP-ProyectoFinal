import logo from "./logo.svg";
import "./App.css";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyAKK8HRqbi_BthVyaadSU8430UeC7czP4w",
  authDomain: "devops-3ce6e.firebaseapp.com",
  projectId: "devops-3ce6e",
  storageBucket: "devops-3ce6e.appspot.com",
  messagingSenderId: "631632953201",
  appId: "1:631632953201:web:db5840bb3157b01ed800d0",
  measurementId: "${config.measurementId}",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
