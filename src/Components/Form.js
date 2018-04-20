/**
 * Created by pidoi on 3/27/2018.
 */
import React from 'react';
import {Component} from 'react';
import {enterName} from '../AC/index';
import {enterPhone} from '../AC/index';
import {enterEmail} from '../AC/index';
import {showingPopup} from '../AC/index';
import {fetchCreateUser} from '../AC/createUserAC';
import {connect} from 'react-redux';
class Form extends Component{
    constructor(){
        super();
        this._onClickHandler=this._onClickHandler.bind(this);
        this.state={
            nameIsValid:false,
            phoneIsValid:false,
            emailIsValid:false,
            buttonDisabled:true
        };
    }
    componentWillReceiveProps(nextProps){
        if(this.props.email!=""&&this.props.name!==""&&this.props.phone!==""&&nextProps.hour!=0){
            this.setState({buttonDisabled: false});
        }
    }
    _btnValidation() {
        if (this.state.emailIsValid && this.state.phoneIsValid && this.state.nameIsValid&&this.props.hour!=0) {
                this.setState({buttonDisabled: false});
            }
        else this.setState({buttonDisabled:true});
    }
    _nameValidation(event){
        if(event.target.value.match(/^[a-zA-Z]+$/)&&event.target.value.length>=2){
            this.props.enterName(event.target.value);
            this.setState({nameIsValid:true});
            this._btnValidation();
        }
        else {
            this.setState({nameIsValid:false});
            this._btnValidation();
        }
    }
    _phoneValidation(event){
        if(event.target.value.match(/^(?=.*[0-9])[+0-9]+$/)&&event.target.value.length>=10){
            this.props.enterPhone(event.target.value);
            this.setState({phoneIsValid:true});
            this._btnValidation();
        }
        else {
            this.setState({phoneIsValid:false});
            this._btnValidation();
        }
    }
    _emailValidation(event){
        if (event.target.value.indexOf("@")!==-1&&event.target.value.indexOf(".")!==-1){
            this.props.enterEmail(event.target.value);
            this.setState({emailIsValid:true});
            this._btnValidation();
        }
        else {
            this.setState({emailIsValid:false});
            this._btnValidation();
        }
    }
    _onKeyHandler(e){
        if (e.charCode == 13) {
           this._onClickHandler();
        }
    }
    _onClickHandler(){
        let url="http://localhost:3000/api/Users";
        this.props.createUser(url,this.props.name,  this.props.phone,this.props.email,this.props.hour,this.props.day);
        if(this.props.userCreateSuccess)this.props.showingPopup();
       /* fetch(url,{
            body:JSON.stringify({
                fields:{
                    'Name' : this.props.name.toString(),
                    'Phone': this.props.phone.toString(),
                    'Email':this.props.email.toString(),
                    'Hour':this.props.hour.toString()+":00",
                    "Day": this.props.day.toString()
                }
            }),
            method:"POST"
        }).then(()=>{
            this.props.showingPopup();
        }).catch(error=>console.log(error));*/
    };
    render(){
        return(
            <div className="form" onKeyPress={this._onKeyHandler.bind(this)}>
                <input type="text" placeholder="Your name and surname" className={this.state.nameIsValid?"validInput":"nonValidInput"} onChange={this._nameValidation.bind(this)}/>
                <input type="text" placeholder="Your phone number" className={this.state.phoneIsValid?"validInput":"nonValidInput"} onChange={this._phoneValidation.bind(this)}/>
                <input type="text" placeholder="Your e-mail" className={this.state.emailIsValid?"validInput":"nonValidInput"} onChange={this._emailValidation.bind(this)}/>
                <input type="button" value="Confirm"  disabled={this.state.buttonDisabled} onClick={this._onClickHandler.bind(this)}/>
            </div>
            )
        }
    }
function mapStateToProps(state) {
    return{name:state.name,
            email:state.email,
            phone:state.phone,
            day: state.selectedHour.day,
            hour:state.selectedHour.hour,
            userCreateSuccess:state.userCreateSuccess}
}
const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (url, name, phone, email, hour, day) => dispatch(fetchCreateUser(url,name, phone, email, hour, day)),
        enterName: (name)=>dispatch(enterName(name)),
        enterPhone:(phonenumber)=>dispatch(enterPhone(phonenumber)),
        enterEmail:(email)=>dispatch(enterEmail(email)),
        showingPopup:()=>dispatch(showingPopup())
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Form);



