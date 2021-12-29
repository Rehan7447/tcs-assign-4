import React from 'react'
import {useLocation} from "react-router-dom";

function User(props) {
    const {state} = useLocation();
    return (
        <div>
            <h1>Welcome {state.user}!</h1>
            {state.email}
        </div>
    )
}

export default User
