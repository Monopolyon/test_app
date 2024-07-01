import { Component } from 'react';
import '../css/create_a_job_main_container.css'
import Create_a_job_line_container from './Create_a_job_line_container';
import Input_container from './Input_container';
import Container_header from './Container_header';


export default class Create_a_job_main_container extends Component {
    render(){
        return(
            <div className='create_a_job_main_container'>
                
                <Create_a_job_line_container html = <div className='line_container'>
                    <Input_container inp = 
                    <div className='client_details_main_container'>                    
                        <Container_header text ='Client details' />
                        <input className='half_line' type='text' placeholder='First name' id='first_name'></input>
                        <input className='half_line half_right' type='text' placeholder='Last name' id='last_name'></input>                    
                        
                        <input className='standart_line' type='tel' placeholder='Phone' id='phone'></input>
    
                        <input className='standart_line' type='email' placeholder='Email' id='email'></input>
                        
    
                    </div> />                    
                    
                    <Input_container inp = <div className='client_details_main_container fl'>
                       <Container_header text='Job type' />
                       
                       <select className='standart_line' placeholder = 'Job Type'>
                            <option value="0">Select job type</option>
                            <option value="1">1 Type</option>
                            <option value="2">2 Type</option>
                            <option value="3">3 Type</option>
                            <option value="4">4 Type</option>
                            <option value="5">5 Type</option>
                       </select>
                       <select className='standart_line' placeholder = 'Job Type'>
                            <option value="0">Job source</option>
                            <option value="1">1 Source</option>
                            <option value="2">2 Source</option>
                            <option value="3">3 Source</option>
                            <option value="4">4 Source</option>
                            <option value="5">5 Source</option>
                       </select>                    
                       
                       <input className='job_type_description' type='tel' placeholder='Job description (optional)'></input>                                      
    
                   </div> />
                </div> />
                    
                <Create_a_job_line_container html = <div className='line_container'>
                    <Input_container inp = 
                    <div className='client_details_main_container'>                    
                        <Container_header text ='Service location' />
                        <form id='addr'>
                            <input className='standart_line addres' type='text' placeholder='Address' id='address' required></input>
                        </form>
                        <input className='standart_line' type='text' placeholder='City'></input>                    
                        
                        <input className='standart_line' type='tel' placeholder='State'></input>
    
                        <input className='half_line' type='email' placeholder='Zip code'></input>

                        <select className='half_line half_right' placeholder = 'Job Type'>
                            <option value="" >Area</option>
                            <option value="1">1 Area</option>
                            <option value="2">2 Area</option>
                            <option value="3">3 Area</option>
                            <option value="4">4 Area</option>
                            <option value="5">5 Area</option>
                       </select>
                        
    
                    </div> />                    
                    
                    <Input_container inp = <div className='client_details_main_container'>
                       <Container_header text='Scheduled' />
                       <input className='standart_line' type='date' placeholder='Job type'></input>
                       <select className='half_line' placeholder = 'Job Type'>
                            <option value="" >Start time</option>
                            <option value="1">1 Time</option>
                            <option value="2">2 Time</option>
                            <option value="3">3 Time</option>
                            <option value="4">4 Time</option>
                            <option value="5">5 Time</option>
                       </select>
                       <select className='half_line half_right' placeholder = 'Job Type'>
                            <option value="" >End time</option>
                            <option value="1">1 Time</option>
                            <option value="2">2 Time</option>
                            <option value="3">3 Time</option>
                            <option value="4">4 Time</option>
                            <option value="5">5 Time</option>
                       </select>
                       <select className='standart_line' placeholder = 'Job Type'>
                            <option value="0">Test select</option>
                            <option value="1">1 Select</option>
                            <option value="2">2 Select</option>
                            <option value="3">3 Select</option>
                            <option value="4">4 Select</option>
                            <option value="5">5 Select</option>
                       </select>                                      
    
                   </div> />
                </div> />
                 
            </div>
        );
    };
};