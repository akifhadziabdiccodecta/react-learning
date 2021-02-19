import './Header.css'
import * as React from "react";

export class Header extends React.Component {
    constructor(props) {
        super(props);
        let name = props.application.applicationName;
        let status = "status";
        let changeType = "INTERNAL";
        this.state = {name, status, changeType};
    }

    componentDidMount() {
        console.log("Header", "componentDidMount");
    }

    componentWillUnmount() {
        console.log("Header", "componentWillUnmount");
    }

    onClickEvent = () => {
        this.setState((state) => {
            let changeType = "INTERNAL";
            return {name: state.name + "1", changeType};
        })
    }

    static getDerivedStateFromProps(props, state) {
        let changeType = state.changeType;
        console.log(changeType);
        let name = props.application.applicationName;
        if (changeType === "INTERNAL") {
            name = state.name;
        }
        return {...state, name, changeType: 'DERIVED'};
    }

    render() {
        console.log("Header", "render");
        return <div className="Header">
            <button onClick={this.onClickEvent}>Change app name</button>
            <span>{this.state.status}</span>
            <h2>{this.state.name}</h2>
            safas
        </div>;
    }
}
