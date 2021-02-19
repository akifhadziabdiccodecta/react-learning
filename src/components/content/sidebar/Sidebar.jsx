import {Link} from "react-router-dom";

export function Sidebar() {
    const routes = [
        {name: "Users", path: "/users"},
        {name: "Files", path: "/files"}
    ]
    return <ul>
        {
            routes.map(route => {
                return <li key={route.path}>
                    <Link to={route.path}>
                        {route.name}
                    </Link>
                </li>;
            })
        }
    </ul>
}
