import React from "react";
import { Link } from "react-router-dom";


export const Header= () => {
    return(

        <div>
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
            <Link to="/cars">Cars</Link>
            <Link to="/marks">Marks</Link>

        </div>
    );
}

