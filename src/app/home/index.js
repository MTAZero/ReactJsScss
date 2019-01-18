import React, { Component } from 'react';
import ListGirls from './listGirls';

class Home extends Component{
    render(){
        return (
            <div className="HomePage">
                <ListGirls />
            </div>
        )
    }
}

export default Home;
