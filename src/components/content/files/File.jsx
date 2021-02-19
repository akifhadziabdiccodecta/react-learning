import {useEffect, useState} from "react";
import {User} from "../users/User";

export function File(props) {
    return <tr>
        <td>{props.file.id}</td>
        <td>{props.file.fileName}</td>
    </tr>;
}

export function Files() {
    const [files, setFiles] = useState([])
    useEffect(() => {
        (async () => {
            const response = await fetch("http://localhost:3001/files");
            const files = await response.json();
            setFiles(files);
        })();
    }, []);
    return <>
        <h2>Files</h2>
        <table>
            <thead>
            {
                files.length > 0 && <tr>
                    <th>Id</th>
                    <th>File name</th>
                </tr>
            }
            </thead>
            <tbody>
            {
                files.length === 0 ? (<tr><td>List of the files is empty.</td></tr>) : (<>
                    {
                        files.map(file => <File key={file.id} file={file} />)
                    }
                </>)
            }
            </tbody>
        </table>
    </>;
}
