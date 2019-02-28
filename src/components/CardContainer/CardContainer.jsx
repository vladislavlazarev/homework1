import React, { Component } from 'react';
import Card from '../Card/Card';
import '../../styles/Components/CardContainer.scss';
export default class CardContainer extends Component {
    render(){
        return(
            <div className="card-container">
                <Card/>
            </div>
        )
    }
}