import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEdit, faTrash} from '@fortawesome/free-solid-svg-icons'

// version table
class Student extends Component {
    render() {
        const {student} = this.props;
        return (
            <tr className="Student">
                <td>
                    <img src={student.Anh}/>
                </td>
                <td>
                    {student.HoTen}
                </td>
                <td>
                    {student.NgaySinh}
                </td>
                <td>
                    {student.QueQuan}
                </td>
                <td>
                    <a className="Action Edit" href="#">
                        <FontAwesomeIcon icon={faEdit} className="icon"/>
                        Edit
                    </a>
                    <a className="Action Delete" href="#">
                        <FontAwesomeIcon icon={faTrash} className="icon"/>
                        Delete
                    </a>
                </td>
            </tr>
        )
    }
}

Student.propTypes = {
    student: PropTypes.object.isRequired
}

Student.defaultProps = {
    student: {
        HoTen: "",
        QueQuan: "",
        NgaySinh: "",
        Anh: ""
    }
}

export default Student;