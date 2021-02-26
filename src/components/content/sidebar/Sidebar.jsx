import {Link} from "react-router-dom";

export function Sidebar() {
    const routes = [
        {
            name: "Users",
            path: "/users",
            children: [
                { name: "Add user", path: "/add-user"}
            ]
        },
        {
            name: "Files",
            path: "/files"
        },
    ]
    return <ul>
        {
            routes.map(route => {
                return <li key={route.path}>
                    <Link to={route.path}>
                        {route.name}
                    </Link>
                    <ul>
                        {
                            route.children && route.children.map(child => {
                                return <li key={child.path}>
                                    <Link to={child.path}>
                                        {child.name}
                                    </Link>
                                </li>
                            })
                        }
                    </ul>
                </li>;
            })
        }
    </ul>
}
