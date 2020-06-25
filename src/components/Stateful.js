import React, {Component} from 'react';

class StatefulComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
            toggle:true
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState((prevState, props)=>({
            toggle: !prevState.toggle
        }));
    }

    render(){
        return(
            <div onClick={this.onClick}>
                Hello, {this.props.name}! I am a SecondComponent.
                <br />
                Toggle is : {this.state.toggle}
            </div>
        )
    }
}

export default StatefulComponent;