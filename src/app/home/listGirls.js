import React, {Component} from 'react';

class Girl extends Component{
    render(){
        const {name, image} = this.props.girl 

        return (
            <a className="GirlTag" href={image} target="blank">
                <img src={image} />
                <div className="Title">
                    {name}
                </div>
            </a>
        )
    }
}


const girls = [
    {
        name: "Viet Nam ",
        image: "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        name: "Smile girl",
        image: "https://images.pexels.com/photos/864937/pexels-photo-864937.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
        name: "Student",
        image: "https://images.pexels.com/photos/1391499/pexels-photo-1391499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        name: "DJA",
        image: "https://images.pexels.com/photos/1382732/pexels-photo-1382732.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        name: "KPG",
        image: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        name: "ZkFG",
        image: "https://images.pexels.com/photos/705740/pexels-photo-705740.png?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        name: "IKF",
        image: "https://images.pexels.com/photos/1060296/pexels-photo-1060296.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        name: "KJA",
        image: "https://images.pexels.com/photos/582039/pexels-photo-582039.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
    },
    {
        name: "KIO",
        image: "https://images.pexels.com/photos/902030/pexels-photo-902030.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }
];

class ListGirl extends Component {

    state = {
        girls: [
            ...girls,
            ...girls,
            ...girls,
            ...girls
        ]
    }

    render(){
        return (
            <div className="ListGirls">
                {
                    [0,1,2,3, 4].map((val, index) => {
                        return (
                            <div className="Colum" key={index}>
                                {
                                    this.state.girls.map((girl, indexg) => {
                                        if (indexg%5 != val%5) return;
                                        return (
                                            <Girl girl={girl} key={indexg} />
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                    
                }
            </div>
        )
    }
}

export default ListGirl;