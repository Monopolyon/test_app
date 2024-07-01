import { Component } from 'react';
import '../css/main_window.css'
import New_create_a_job from './new create a job window/components/New_create_a_job_main_window';
export default class Main_window extends Component {
    render(){
        return(
            <div className='main_window'>
                <button className='new_create_a_job_btn'>NEW Create a job</button>
                <New_create_a_job />
            </div>
        );
    };
};