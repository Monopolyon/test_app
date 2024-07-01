import { Component } from 'react';
import '../css/container_header.css'


export default class Container_header extends Component {
    render(){
        return(
            <div className='container_header'>
                {this.props.text}
            </div>
        );
    };
};