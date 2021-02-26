import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {Content} from "./components/content/Content";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <>
            <div className="App">
                <BrowserRouter>
                    <Header application={{applicationName: "React learning"}} />
                    <Content className="container" />
                    <Footer />
                </BrowserRouter>
            </div>
        </>
  );
}

export default App;
