/**
 * Created by pidoi on 3/27/2018.
 */
import React from 'react';
import {Component} from 'react';
import TimeSlot from './TimeSlot';
export default class DaySlots extends Component{
    constructor(){
        super();
        this.state={
            selectedHourValue:0,
            buttonActive:false,
            clickedId:0
        }
    }
    _newButtonClick(id){
        this.setState({buttonActive:true, clickedId:id});
    }
    _getTimeSlot(date){
        let state=this.state.buttonActive;
        let clickedId=this.state.clickedId;
        return timeObj.map((hour, index)=><TimeSlot time={hour} key={index} id={index+date} clickedId={clickedId} newButtonState={this._newButtonClick.bind(this)} date ={date} onClickHandler={this._onClickHandler.bind(this)}/>);
    }
    _onClickHandler(){
        this.setState({hourSelected:this.textContent});
    };
    render(){
        return(
            <div className="DaySlots">
                <div>
                    <h1>Wednesday - 11th</h1>
                    {this._getTimeSlot("11.04")}
                </div>
                <div>
                    <h1>Monday - 16th</h1>
                    {this._getTimeSlot("16.04")}
                </div>
            </div>
        )
    }
}
let timeObj=[['10'],['11'],['12'],['13'],['14'],['15'],['16'],['17']];