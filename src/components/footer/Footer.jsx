import './Footer.css'
import {useState, useEffect} from "react";
import {Emitter} from "../content/Emitter";
import * as React from "react";

export function Footer() {
    const languages = [
        {link: '#', name: 'en'},
        {link: '#', name: 'de'},
        {link: '#', name: 'fr'},
        {link: '#', name: 'pt'}
    ];
    let year = new Date().getFullYear();
    let showYear = true;
    const [state] = useState({year, showYear});
    useEffect(() => {
        Emitter.emitter.subscribe(data => {
            console.log("Footer data", data )
        })
    }, [])
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
        <label>
            Send data to add users
            <input onChange={event => Emitter.emitter.next(event.target.value)}/>
        </label>
    </footer>
}
