import React from 'react';

class HelloWorld extends React.Component{
    constructor(props){
        super(props);

        let firstName = this.props.name.split(" ")[0];

        this.state={
            name:firstName
        }
    }
    render(){
        return ( 
            <>
                <h1>Hello React World</h1>
                <h2>This is {this.state.name}!</h2>
                <h3>I am just getting started with {this.props.language}</h3>
                <h4>Once again, it is my pleasure</h4>
            </>)
    }
}
export default HelloWorld;