import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>

        <ButtonComponent testoButton="Cliccami!" class={"grey"} />
        <ButtonComponent testoButton="More info!" class={"green"} />
        <ImageComponent
          src="https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="tigre"
        />
        <ImageComponent
          src="https://images.pexels.com/photos/52500/horse-herd-fog-nature-52500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="cavalli"
        />
      </header>
    </div>
  );
}

export default App;
