/**
 * Created by pidoi on 3/27/2018.
 */
import React from 'react';
import {Component} from 'react';
import DaySlots from './DaySlots';
import Form from './Form';
export default class TimeSlotBoard extends Component{
    render(){
        return(
            <div className="TimeBoard">
                <div className="intro">
                    <a href="https://www.melexis.com/en"><img src="../images/logo.png" height="8%" width="15%"/></a>
                    <h1>Traineeship Program Melexis</h1>
                    <h1>Subscription for the Technical Test</h1>
                    <p>Dear Applicant,</p>
                    <p>You have applied to participate in Melexis Traineeship Program at our career event/portal.</p>
                    <p>Our Traineeship Program includes the two-month summer practice (3 July - 30 August, 2018) followed by the educational course at our Labs or in the office.</p>
                    <ul>
                        <h3>Melexis seletion process has 3 steps:</h3>
                        <li><i className="fas fa-cogs"></i>Technical Test</li>
                        <li><i className="fas fa-cogs"></i>Application form completion</li>
                        <li><i className="fas fa-cogs"></i>Interview with Technical Experts and HR team.</li></ul>
                    <p>The Technical Test takes place on April 20, April 24, April 26 at University "KPI", building Number-12, room 324.To subscribe for the Technical Test, please fill in the form below until April, 20th.</p>
                    <h3>We look forward to seeing you soon</h3><p>Melexis HR Team.</p>
                </div>
                <h3 id="date">April - 2018</h3>
                <DaySlots/>
                <Form/>
            </div>
        )
    }
}