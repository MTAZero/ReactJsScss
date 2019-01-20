import React, { Component } from 'react';

import Home from './home'
import StudentsPage from './students'

class App extends Component{
    render(){
        return (
            <div className="App">
                <StudentsPage />
                {/* <Home />  */}
            </div>
        )
    }
}

export default App;
