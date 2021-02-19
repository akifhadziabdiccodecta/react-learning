import './Footer.css'
import {useState, useEffect} from "react";

export function Footer() {
    const languages = [
        {link: '#', name: 'en'},
        {link: '#', name: 'de'},
        {link: '#', name: 'fr'},
        {link: '#', name: 'pt'}
    ];
    let year = new Date().getFullYear();
    const [state, setState] = useState({year});
    useEffect(() => {
        console.log("Footer", "componentDidMount");
        return () => {
            console.log("Footer", "componentWillUnmount");
        }
    }, [state.year])
    let handler = (event) => {
        setState({year: state.year + 1});
    }
    console.log("Footer", "render")
    return <footer>
        <button onClick={handler}>Increase year</button>
        Copyright {state.year}
        <p>
            {
                languages.map((language) =>
                    <a className="languageStyle"
                        key={language.name}
                        href={language.link}>
                        {language.name}
                    </a>
                )
            }
        </p>
    </footer>
}
