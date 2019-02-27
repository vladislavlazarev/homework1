import React, { Component } from 'react';
import '../../styles/Components/Navbar.scss'
export default class Navbar extends Component {
    render() {
        return(
            <>
                <nav className="navbar">
                    <a className="navbar-brand">Navbar</a>
                    <a className="nav-link ">Home</a>
                    <a className="nav-link disabled">Features</a>
                    <a className="nav-link disabled">Pricing</a>
                    <a className="nav-link disabled">About</a>
                    {/*<form className="form-inline">*/}
                        {/*<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">*/}
                            {/*<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button></input>*/}
                    {/*</form>*/}
                </nav>
            </>
        )
    }
}