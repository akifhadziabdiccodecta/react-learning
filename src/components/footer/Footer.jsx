import './Footer.css'
import {useState, useEffect} from "react";
import {Button} from "react-bootstrap";

export function Footer() {
    const languages = [
        {link: '#', name: 'en'},
        {link: '#', name: 'de'},
        {link: '#', name: 'fr'},
        {link: '#', name: 'pt'}
    ];
    let year = new Date().getFullYear();
    let showYear = true;
    const [state, setState] = useState({year, showYear});
    useEffect(() => {
        console.log("Footer", "componentDidMount");
        return () => {
            console.log("Footer", "componentWillUnmount");
        }
    }, [state.year, state.showYear])
    let handler = (event) => {
        setState({year: state.year + 1});
    }
    let showYearHandler = (event) => {
        setState((state) => {
            return {showYear: !state.showYear}
        });
    }
    console.log("Footer", "render")
    return <footer className="footer">
        Copyright {state.year}
        <span>
            {
                languages
                    .filter(language => {
                        return language.name !== 'en';
                    })
                    .map((language) =>
                    <a className="languageStyle"
                        key={language.name}
                        href={language.link}>
                        {language.name}
                    </a>
                )
            }
        </span>
    </footer>
}
