import { Component } from 'react';
import '../css/new_create_a_job.css'
import Window_header from '../../Window_header';
import Create_a_job_main_container from './Create_a_job_main_container';
import Create_job_button_container from './Create_job_button_conteiner';

export default class New_create_a_job extends Component {
    render(){
        return(
            <div className='new_create_a_job'>
                <Window_header header_text = 'NEW Create a job' colose_id='create_new_job'/>
                <Create_a_job_main_container />
                <Create_job_button_container />
            </div>
        );
    };
};