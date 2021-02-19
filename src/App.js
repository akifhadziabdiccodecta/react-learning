import './App.css';
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {Content} from "./components/content/Content";
import {useState} from "react";

function App() {
    const [applicationName, setApplicationName] = useState("React learning");
    const nameHandler = () => {
        setApplicationName(applicationName + 2);
    }
    return (
    <div className="App">
      <Header application={{applicationName}} />
      <Content />
      <button onClick={nameHandler}>Content, change application name</button>
      <Footer />
    </div>
  );
}

export default App;
