import React, {Component} from 'react';
import ListStutents from './listStudents';
import HeadBar from './headBar'

class StudentsPage extends Component{
    render(){
        return (
            <div className="StudentsPage">
                <div className="Title">
                    List students of HNUE High School
                </div>

                <HeadBar />
                {/* <ListStutents /> */}
            </div>
        )
    }
}

export default StudentsPage;