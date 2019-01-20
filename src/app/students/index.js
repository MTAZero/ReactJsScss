import React, {Component} from 'react';
import ListStutents from './listStudents';
import HeadBar from './headBar'
import Pagination from '../shared/pagination'

const students = [
    {
        HoTen: "Nguyễn Quang Dũng",
        QueQuan: "Hà Nội",
        NgaySinh: "14/03/1996",
        Anh: "https://scontent.fhan3-1.fna.fbcdn.net/v/t31.0-1/c282.0.960.960a/p960x960/10506738_10150004552801856_220367501106153455_o.jpg?_nc_cat=1&_nc_oc=AQlUe2wN7Xca9D4AGAyxWgGuri6A_spT0ulv70rON2cHP-pt3jSvKKsTyheJL0CWpJ4&_nc_ht=scontent.fhan3-1.fna&oh=a39705d5054abf4e28a85b82486d9839&oe=5CCA7569",
    },
    {
        HoTen: "Nguyễn Hoàng Hải",
        QueQuan: "Hà Nội",
        NgaySinh: "07/01/1997",
        Anh: "https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-9/32293435_1578329408957031_1054780986497171456_n.jpg?_nc_cat=102&_nc_oc=AQlRbwhJPv5BaWoo0nmiTwtHKqXzsOyyLdbtrF3WL2k1cSbtLG-qwMX65hkP8gmsVnE&_nc_ht=scontent.fhan3-1.fna&oh=ff8c6977e210f488f5d21e16556f62aa&oe=5CFDCC07",
    },
    {
        HoTen: "Phạm Thái Sơn",
        QueQuan: "Bắc Ninh",
        NgaySinh: "14/02/1996",
        Anh: "https://scontent.fhan3-3.fna.fbcdn.net/v/t1.0-1/13315381_1097086673690485_4830471470865275629_n.jpg?_nc_cat=100&_nc_oc=AQlYC2rrB2V-GOei9fZmcXB-XuBDhXuTV4ZqiXAZZvaTPkOyBVCQLddnW2uIjDcif3k&_nc_ht=scontent.fhan3-3.fna&oh=ec28f5d3be6bc92c7ea046d1f95f4ccd&oe=5CBADA6D",
    },
    {
        HoTen: "Cao Xuân Hưng",
        QueQuan: "Hưng Yên",
        NgaySinh: "06/11/1996",
        Anh: "https://scontent.fhan3-3.fna.fbcdn.net/v/t1.0-1/23517895_1471043623010878_2130603423311852450_n.jpg?_nc_cat=100&_nc_oc=AQkChT2wymVfHq6wRk6DQFNEHN6ZxZwyrJasxIHdE-FB_GH7ohaz7i8inXgJnKSnJ0A&_nc_ht=scontent.fhan3-3.fna&oh=2bed7883f2ea5136a8014f52f8390403&oe=5CB59231",
    },
    {
        HoTen: "Nguyễn Trọng Đông",
        QueQuan: "Hà Nội",
        NgaySinh: "13/08/1996",
        Anh: "https://scontent.fhan4-1.fna.fbcdn.net/v/t1.0-9/45398380_1949481518492066_496680295966179328_n.jpg?_nc_cat=104&_nc_oc=AQkhK_Gh_Zynd6U8M0KOSurxk5rGsKLP2aw35z4kNcMlpsGKMwg25gnzpgjGhuLGfoI&_nc_ht=scontent.fhan4-1.fna&oh=06c813fb7edf8d195ccaaed0a0d2acb4&oe=5CCDCE90",
    },
    {
        HoTen: "Bùi Xuân Thuỷ",
        QueQuan: "Vĩnh Phúc",
        NgaySinh: "03/09/1996",
        Anh: "https://scontent.fhan4-1.fna.fbcdn.net/v/t1.0-9/45843882_1083281588499186_3950903693620019200_n.jpg?_nc_cat=108&_nc_oc=AQmtleJWezwGadGcCGQmCmJ_t92UfyW1EUZ3KyNp0MW8ffP2KeyjeWYBkTF_zOTOmmE&_nc_ht=scontent.fhan4-1.fna&oh=b158fdc24c0989c1e49a67f480200341&oe=5CC5DAA2",
    }
]

class StudentsPage extends Component{

    state = {
        students
    }

    render(){
        return (
            <div className="StudentsPage">
                <div className="Title">
                    List students of HNUE High School
                </div>
                <HeadBar />
                <ListStutents 
                    students = {this.state.students} 
                />
                <Pagination />
            </div>
        )
    }
}

export default StudentsPage;