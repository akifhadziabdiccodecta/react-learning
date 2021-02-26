import './Content.css';
import {Users} from "./users/User";
import {Route, Switch, useHistory} from "react-router-dom";
import {Files} from "./files/File";
import {Sidebar} from "./sidebar/Sidebar";
import {AddUser} from "./users/AddUser";

export function Content(props) {
    let history = useHistory();
    let submit = ({event, name, address}) => {
        event.stopPropagation();
        event.preventDefault();
        (async () => {
            let response = await fetch("http://localhost:3001/users", {
                method: 'POST',
                headers: {contentType: 'application/json'},
                body: JSON.stringify({name, address})
            });
            history.push("/users");
            console.log(response.status, response.headers);
        })();
    }
    return <div className={props.className}>
        <div className="sidebar row">
            <div className="col-md-3 col-sm-5">
                <Sidebar />
            </div>
            <div className="app-wall col-md-9 col-sm-7">
                <Switch>
                    <Route path='/users'>
                        <Users />
                    </Route>
                    <Route path='/files'>
                        <Files />
                    </Route>
                    <Route path='/add-user'>
                        <AddUser submit={submit} />
                    </Route>
                </Switch>
            </div>
        </div>
    </div>;
}
