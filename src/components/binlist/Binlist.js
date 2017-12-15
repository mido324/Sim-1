import React, { Component } from 'react';
import axios from 'axios'; // simulation-1 37E-1
import {Link} from 'react-router-dom'
class Binlist extends Component {
constructor(props) { //simulation -1 36I
        super(props)
this.state = { //simulation -1 36C
            bins: [],
            id: ''
        }
this.getShelf = this.getShelf.bind(this);
    }

    get_shelf () {

        return axios
        .get(`http:localhost:3001/api/shelf/`) // simulation -1 42J
            .then(res => //simulation -1 37D
                 {
               
                this.setState({bin: res.data})
                console.log(res.data);
            }) 
    }
componentDidMount() {
    getShelf() //simulation -1 //39C
}
    
render() { //simulation-1 38D
    const bins = this.state.bins.map((element, i)=> { //simulation 
        return <Link to={`/bin/${element.shelfletter+element.binnumber}` } key={i}>
        <h3 className = "shelf" > BIN {element.binnumber} </h3>
        </Link>
    })

    return (
        <div>
                {this.state.bins}
            </div>
        );
    }
}


export default Binlist;
//simulation - 1 37E-2