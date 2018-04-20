/**
 * Created by pidoi on 3/27/2018.
 */
import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {selectHour} from '../AC/index';
import {fetchData} from'../AC/checkingFreePlaces';
var classNames = require('classnames');
class TimeSlot extends Component{
    constructor(){
        super();
        this.state={
            isFreePlaces:false
        }
    }
    componentWillMount() {
        window.addEventListener('load', this.handleLoad(this.props.time, this.props.date));
    }
    handleLoad(time, day){
        let url=`http://localhost:3000/api/Users?hour=${time}&day=${day}`;
        this.props.fetchData(url);
               console.log(data);
                let countOfOccupiedPlaces=0;
                data.map(obj=>{
                    if((obj.hour==time.toString()+":00")&&(obj.day==day.toString()))countOfOccupiedPlaces++;
                });
                if(countOfOccupiedPlaces>9){
                    this.setState({isFreePlaces:true});
                }

    }
    _onClickHandler(time, id) {
        this.props.selectHour(time, this.props.date);
        this.props.newButtonState(id);
    }
    render(){
        let btnClassNames=classNames({
            'timeSlot':true,
            'occupied': this.state.isFreePlaces
        });
        return(
            <div className={btnClassNames} id={(this.props.id==this.props.clickedId)&&this.state.isFreePlaces==false?"active":null} onClick={this._onClickHandler.bind(this,this.props.time, this.props.id)}><p>{this.props.time+":00"}</p></div>
        )
    }
}
function mapStateToProps(state) {
    return {
        hour:state.selectedHour.hour,
        day:state.selectedHour.day,
        freePlaces:state.freePlaces,
        dataHasErrored: state.dataHasErrored,
        data: state.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(fetchData(url)),
        selectHour:(hour, date)=>dispatch(selectHour(hour,date))
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(TimeSlot);