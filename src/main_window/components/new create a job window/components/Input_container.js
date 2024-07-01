import { Component } from 'react';
import '../css/input.container.css'


export default class Input_container extends Component {
    render(){
        return(
            <div className='input_container'>
                {this.props.inp}
            </div>
        );
    };
};