import React, {Component} from 'react';

class MyFrom extends Component{
    constructor(props){
        super(props);

        this.onChange = this.onChange.bind(this);
        this.state = {
            name:''
        }
    }

    onChange(e){
        this.setState({
            name:e.target.value
        })
    }
    render(){
        return(
            <div className="myInput">
                <label for="name-input">Name: </label>
                <input 
                    id = "name-iput"
                    onChange = {this.onChange}
                    value = {this.state.name}
                />
            </div>
        )
    }
}

export default MyFrom;