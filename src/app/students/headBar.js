import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faSearch } from '@fortawesome/free-solid-svg-icons'

class HeadBar extends Component {
    render() {
        return (
            <div className="HeadBar">
                <div className="AddButton">
                    <a 
                        href="#"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faPlusCircle} onClick={()=>console.log("Click")} />
                        Add student
                    </a>
                </div>
                <div className="SearchButton">
                    <input type="text" name="search" placeholder="Search ..."
                    />
                    <FontAwesomeIcon icon={faSearch} />
                </div>
            </div>
        )
    }
}

export default HeadBar;