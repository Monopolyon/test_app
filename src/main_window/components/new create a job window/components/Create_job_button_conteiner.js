import { Component } from 'react';
import '../css/create_job_button_container.css'
import {Chek_Field_Value} from '../../../othr js/other_code'

export default class Create_job_button_container extends Component {

    constructor(props){
        super(props);
        this.state = {
            create_btn_text: 'Create job'
        }
    }

    Create_Job(even){

        const first_name = document.getElementById('first_name').value;
        const second_name = document.getElementById('last_name').value;
        const address = document.getElementById('address').value;
        const email = document.getElementById('addr').requestSubmit();

        if(!Chek_Field_Value(first_name) || !Chek_Field_Value(second_name) || !Chek_Field_Value(address)){

            return;
        };



        const company = 'fopkostash';
        const api_token = 'fa9449195b243bf4ca2e77cc629e014569e73c7e'


        

        fetch('https://'+ company +'.pipedrive.com/v1/deals?api_token=' + api_token,{
            method: 'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:
                 JSON.stringify({
                    title: 'New deal',
                    value: first_name,
                    status: second_name

                })
            
            
        }).then(res=> res.text()).then(res=> console.log(res))
    };

    render(){
        return(
            <div className='create_job_button_container'>
                <button className='create_job_button left_btn' id='create_job_btn' type='submit' onClick={this.Create_Job}>Create job</button>
                <button className='create_job_button right_btn' id='save_info_btn'>Save info</button>
            </div>
        );
    };
};