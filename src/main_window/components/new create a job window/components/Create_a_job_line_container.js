import { Component } from 'react';
import '../css/create_a_job_line_container.css'
import Input_container from './Input_container';
import Container_header from './Container_header';


export default class Create_a_job_line_container extends Component {
    render(){
        return(
            <div className='create_job_line_container'>                
                {this.props.html}                                
            </div>
        );
    };
};