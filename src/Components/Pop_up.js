/**
 * Created by pidoi on 3/30/2018.
 */
import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
var classNames = require('classnames');
class Pop_up extends Component{
    constructor(){
        super();
        this.state={
            popupHide:false
        }
    }
    _onClickHandler(){
        this.setState({popupHide:true});
        location.reload();
    }
    render(){
        let btnClassNames=classNames({
            "overlay":(this.props.makeVisible&&this.state.popupHide)||(!this.props.makeVisible&&!this.state.popupHide),
            "popup_visible":this.props.makeVisible&&!this.state.popupHide
        });
        return(
        <div id="popup1" className={btnClassNames}>
            <div className="popup">
                <h2>Dear Applicant,</h2>
                <p>Thank you for your application, it was submitted.</p>
            </div>
            <input type="button" value={"OK"} id="confirmation" onClick={this._onClickHandler.bind(this)}/>
        </div>
        )
    }
}
function mapStateToProps(state) {
    return{
        makeVisible:state.makeVisible
    }
}
export default connect(mapStateToProps)(Pop_up);