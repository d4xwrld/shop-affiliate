import logo from "./logo.svg";
import "./App.css";
import Swal from "sweetalert2";
import Nav from "./component/Nav";

function App() {
  function Checker() {
    Swal.fire("SweetAlert2 is working!");
  }

  return (
    <>
      <Nav />
      <div className="bg-indigo-600 w-full h-screen"></div>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p onClick={() => Checker(this)}>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
