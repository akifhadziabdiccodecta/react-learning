import './Content.css';
import {Users} from "./users/User";
import {Route, Switch} from "react-router-dom";
import {Files} from "./files/File";
import {Sidebar} from "./sidebar/Sidebar";

export function Content(props) {
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
                </Switch>

            </div>
        </div>
    </div>;
}
