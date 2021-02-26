import {useEffect, useState} from "react";
import {Emitter} from "../Emitter";

export function AddUser(props) {
    let [name, setName] = useState('');
    let [address, setAddress] = useState('');
    useEffect(() => {
        Emitter.emitter.subscribe(data => {
            console.log("Add user data", data )
        })
    }, []);
    return <form onSubmit={(event) => props.submit({event, name, address})}>
        <label className={"row"}>
            Name
            <input
                value={name}
                placeholder="Name"
                type="text"
                name="Name"
                onChange={event => setName(event.target.value)}
            />
        </label>
        <label className={"row"}>
            Address
            <textarea
                value={address}
                rows={3}
                cols={30}
                placeholder="Address"
                name="Address"
                onChange={event => setAddress(event.target.value)}
            >
            </textarea>
        </label>
        <button type={"submit"}>Submit</button>
    </form>
}
