import React, { Component } from 'react';
import '../../styles/Components/Jumbotron.scss';
export default class Jumbotron extends Component {
    render(){
        return(
            <>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Fluid jumbotron</h1>
                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of
                            its parent.</p>
                    </div>
                </div>
            </>
        )
    }
}