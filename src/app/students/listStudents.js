import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Student from './student'

class ListStudents extends Component {

    render() {
        return (
            <div className = "ListStudents">
                <table className="Table">
                    <tr>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Birthday</th>
                        <th>Hometown</th>
                        <th>Action</th>
                    </tr>
                {
                    this.props.students.map((student, index) => {
                        return (
                            <Student key={index} student={student} />
                        )
                    })
                }
                </table>
            </div>
        )
    }
}

ListStudents.propTypes = {
    students: PropTypes.object.isRequired,
}

ListStudents.defaultProps = {
    students: []
}

export default ListStudents;