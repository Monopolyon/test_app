import { Component } from 'react';
import '../css/window_header.css'

export default class Window_header extends Component {
    render(){
        return(
            <div className='header_container'>
                <div className='header_text'>{this.props.header_text}</div>
                <div className='header_close' id={this.props.colose_id}>X</div>
            </div>
        );
    };
};