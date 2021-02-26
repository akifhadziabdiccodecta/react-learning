import {useEffect, useState} from "react";
import { DataGrid } from '@material-ui/data-grid';

export function User(props) {
    return <tr>
        <td>{props.user.id}</td>
        <td>{props.user.name}</td>
        <td>{props.user.address}</td>
    </tr>;
}

export function Users() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        (async () => {
            const response = await fetch("http://localhost:3001/users");
            const users = await response.json();
            setUsers(users);
        })();
    }, []);
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 300 },
        { field: 'address', headerName: 'Address', width: 500 }
    ]
    return <>
        <h2>Users</h2>
        <DataGrid rows={users} columns={columns} pageSize={5} checkboxSelection />
    </>;
}
