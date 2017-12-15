import React, { Component } from 'react';
import axios from 'axios'; // simulation-1 37E-1
class Binlist extends Component {
constructor(props) { //simulation -1 36I
        super(props)
this.state = { //simulation -1 36C
            bins: [],
            id: ''
        }
    }
componentDidMount() { //simulation -1 //39C
return axios
.get(`http:localhost:3001/api/shelf/${this.props.params.match.id}`) // simulation -1 42J
    .then(res => //simulation -1 37D
         {
       
        this.setState({bin: res.data})
        console.log(res.data);
    }) 
}
    
render() { //simulation-1 38D
        return (
            <div>
                
            </div>
        );
    }
}

export default Binlist;
//simulation - 1 37E-2